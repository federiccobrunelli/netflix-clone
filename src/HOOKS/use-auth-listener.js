import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../CONTEXT/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.get('authUser'))
    );

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {

    })

}