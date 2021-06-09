import firebase from "../src/firebase";
import domevent from "./domevents";
import swal from "sweetalert";

const loginBttn = document.getElementById("loginbutton");
const logoutBttn = document.getElementById("logoutbutton");
const addtaskBttn = document.getElementById("addtask");
const addcatBttn = document.getElementById("addcatbttn");

const allTopics = document.getElementById("alltopics");

setTimeout(domevent.domevent.welcome(), 1500);

const checkState = () => {
  if (firebase.userState) {
    domevent.domevent.logOut();
  } else {
    domevent.domevent.login();
  }
};

checkState();

loginBttn.addEventListener("click", function () {
  domevent.domevent.logOut();
  firebase.signIn();
  showCats();
});

logoutBttn.addEventListener("click", function () {
  domevent.domevent.removeCats();
  domevent.domevent.login();
  firebase.getOut();
  domevent.domevent.rmTaskCointainer();
  domevent.domevent.activateNavbuttons();
});

addtaskBttn.addEventListener("click", function () {
  domevent.domevent.addTask();
  domevent.domevent.disableNavbuttons();

  const addTaskAdd = document.getElementById("addbutton");
  const addTaskCancel = document.getElementById("cancelbutton");

  addTaskAdd.addEventListener("click", addbuttonfunc);
  addTaskCancel.addEventListener("click", removebuttonfunc);
});

const addbuttonfunc = () => {
  const nameinput = document.getElementById("nameinput");
  const categoryinput = document.getElementById("categoryinput");
  const dateinput = document.getElementById("dateinput");
  const notesinput = document.getElementById("notesinput");
  if (
    nameinput.value == "" ||
    categoryinput.value == "" ||
    dateinput.value == ""
  ) {
    swal("Please fill at least the first 3 fields please");
  } else {
    domevent.domevent.rmTaskCointainer();
    domevent.domevent.activateNavbuttons();
    firebase.newAct(
      nameinput.value,
      categoryinput.value,
      dateinput.value,
      notesinput.value
    );
  }
};

const removebuttonfunc = () => {
  domevent.domevent.rmTaskCointainer();
  domevent.domevent.activateNavbuttons();
};

allTopics.addEventListener("click", function () {
  domevent.domevent.removeActs();
  firebase.BringAllTopics(domevent.domevent.createAct);
});

addcatBttn.addEventListener("click", function () {
  swal({
    text: "Remember that if you don't add any new activity to the category it will be deleted",
    icon: "info",
    content: {
      element: "input",
      attributes: {
        placeholder: "Name your new category",
        id: `${"newcatid"}`,
      },
    },
  }).then((value) => {
    if (value != "" && value != null) {
      swal({
        icon: "success",
        text: "The new category has been added !",
      });
      domevent.domevent.createNewCatBttn(value);
      showCats();
    } else {
      swal({
        icon: "error",
        text: "Mehhh it wasn't that important anyway...",
      });
    }
  });
});

const showCats = () => {
  firebase.BringCategories(domevent.domevent.RefreshCatBttns);

  setTimeout(function () {
    const cats = document.querySelectorAll(".topic");

    cats.forEach((cat) =>
      cat.addEventListener("click", function () {
        domevent.domevent.removeActs();
        firebase.BringThisEvents(domevent.domevent.createAct, cat.textContent);
        cat.setAttribute("disabled", "true");
        setTimeout(function () {
          cat.removeAttribute("disabled");
        }, 300);
      })
    );
  }, 2000);
};
