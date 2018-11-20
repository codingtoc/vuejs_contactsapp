import contactAPI from "../api/ContactsAPI";
import Constant from "../constant";

export default {
  [Constant.FETCH_CONTACTS]: (store, payload) => {
    var pageno;
    if (typeof payload === "undefined" || typeof payload.pageno === "undefined")
      pageno = 1;
    else pageno = payload.pageno;
    var pagesize = store.state.contactlist.pagesize;

    contactAPI.fetchContacts(pageno, pagesize).then(response => {
      store.commit(Constant.FETCH_CONTACTS, {
        contactlist: response.data
      });
    });
  },
  [Constant.ADD_CONTACT]: (store, payload) => {
    contactAPI.addContact(payload.contact).then(response => {
      if (response.data.status === "success") {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
      } else {
        console.log("연락처 추가 실패 : " + response.data);
      }
    });
  },
  [Constant.UPDATE_CONTACT]: (store, payload) => {
    var currentPageNo = store.state.contactlist.pageno;
    contactAPI.updateContact(payload.contact).then(response => {
      if (response.data.status === "success") {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
      } else {
        console.log("연락처 변경 실패 : " + response.data);
      }
    });
  },
  [Constant.UPDATE_PHOTO]: (store, payload) => {
    var currentPageNo = store.state.contactlist.pageno;
    contactAPI.updatePhoto(payload.no, payload.file).then(response => {
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
  [Constant.DELETE_CONTACT]: (store, payload) => {
    var currentPageNo = store.state.contactlist.pageno;
    contactAPI.deleteContact(payload.no).then(response => {
      store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
    });
  },
  [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
    contactAPI.fetchContactOne(payload.no).then(response => {
      store.commit(Constant.FETCH_CONTACT_ONE, { contact: response.data });
    });
  },
  [Constant.INITIALIZE_CONTACT_ONE]: store => {
    store.commit(Constant.INITIALIZE_CONTACT_ONE);
  }
};
