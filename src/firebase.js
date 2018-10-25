import * as firebase from 'firebase'

var config = {
	apiKey: "AIzaSyDxSwD9MPYGuN17wq9WX5E5p_24yiJADdI",
	authDomain: "clubhouse-b84d3.firebaseapp.com",
	databaseURL: "https://clubhouse-b84d3.firebaseio.com",
	projectId: "clubhouse-b84d3",
	storageBucket: "clubhouse-b84d3.appspot.com",
	messagingSenderId: "397384543822"
};
firebase.initializeApp(config)

export default firebase