import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utilities/Firebase";

const useFetch = () => {
	const [test, setTest] = useState("");

	const colRef = collection(db, "test");

	useEffect(() => {
		let testProto = [];

		onSnapshot(colRef, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				testProto.push({ ...doc.data(), id: doc.id });
			});

			setTest(testProto);
		});
	}, []);

	return test;
};

export { useFetch };
