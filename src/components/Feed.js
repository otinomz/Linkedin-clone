import { Create, EventNote, Image, Subscriptions, CalendarViewDay } from '@mui/icons-material'
import React, {useState, useEffect} from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import { db } from "../Firebase/firebase"
import firebase from 'firebase'


function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])
    
    const sendPost = e => {
        e.preventDefault()

        db.collection('posts').add({
            name: 'Otinomo Richard',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form>
                        <input type="text" value={input} onChange={ e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit"> Send </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70b5f9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
                    <InputOption Icon={ CalendarViewDay } title="Write article" color="#75c15e"/>
                </div>
            </div>

            {/* Posts section  */}
            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl= {photoUrl}
                />
            ))}
        
        </div>
    )
}


export default Feed
