import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../CONTEXT/firebase';

export function useContent(target) {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext); //connects to firebase db

    useEffect(() => {
        firebase.firestore().collection(target).get() //gets all the data from specific target "series" or "films"
            .then((snapshot) => { //data gets returned as snapshot
                const allContent = snapshot.docs.map((contentObj) => ({
                    
                    ...contentObj.data(),
                    docId: contentObj.id
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []); //runs only once, when the component is rendered

    return { [target]: content };
}