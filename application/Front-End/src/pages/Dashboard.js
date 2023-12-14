import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import NavMenu from './NavMenu';
import placeholderImage from '../images/sillouette.jpg';
import placeholderMedia from '../images/sfLibrary.png';
import PostCardTemplate from './PostCardTemplate';
import PostWindow from './PostWindow';


function Dashboard() {
    // State for the active tab
    const [activeTab, setActiveTab] = useState('profile');

    // Placeholder data for the media items
    const mediaItems = [
        { id: 0, title: 'Media 1', image: placeholderMedia },
        // { id: 1, title: 'Media 2', image: placeholderMedia },
        // { id: 2, title: 'Media 3', image: placeholderMedia },
        // { id: 3, title: 'Media 4', image: placeholderMedia },
    ];
    // Placeholder data for chats
    let chatMessages = [];

    const info = JSON.parse(sessionStorage.getItem('user'));

    console.log(info);

    const first = info.Firstname;
    const last = info.Lastname;
    const email = info.Email;

    const fullname = first + " " + last;

    const display = () => {
        
        console.log(info);

    }

    const getActiveClass = (tabName) => activeTab === tabName ? 'active' : '';

    const messageApi = "http://localhost:8003/getMessage";
    const messageApiForSender = "http://localhost:8003/getMessageBySender";

    const [options, setOptions] = useState([]);
  	const [selectedOption, setSelectedOption] = useState('');
    let isTutor = false;
  
    const tutorEmailApi = "http://3.101.225.46:8003/GetTutorByEmail";

    const [isTutorBool, setisTutorBool] = useState({});

   

    useEffect(() => {
        console.log("123");
        let handleEmail = async () => {
            try {
                const response = await fetch(tutorEmailApi, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "email": email,
                    }),
                })
                    .then(response => response.text())
                    .then(result => {
                       
                        // result = JSON.parse(result);
                        console.log("Here are results12: " + result);
                        if (result) {
                            console.log("is a tutor");
                            // setBool({ isTutorBool: 'true' });
                            // isTutor = true;
                            sessionStorage.setItem('isTutor', 'true');
                        } else {
                            sessionStorage.setItem('isTutor', 'false');
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (e) {
                console.log(e);
            }
        };
        
		// Fetch dynamic data (replace this with your data-fetching logic)
		const fetchMessage = async () => {
		  try {
			const response = await fetch(messageApi, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
                body: JSON.stringify({
                    id: JSON.parse(sessionStorage.getItem('user'))[0].id,
                })
            });

			const data = await response.json();
			
            chatMessages = data;
            console.log(chatMessages);  
            setOptions(data);
		  } catch (error) {
			console.error('Error fetching options:', error);
		  }
		};
        const fetchMessageBySender = async () => {
            try {
              const response = await fetch(messageApiForSender, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      id: JSON.parse(sessionStorage.getItem('user'))[0].id,
                  })
              });
  
              const data = await response.json();
              
              chatMessages = data;
              console.log('sender',chatMessages);  
              setOptions(data);
            } catch (error) {
              console.error('Error fetching options:', error);
            }
          };
          handleEmail();
          if(sessionStorage.getItem('isTutor') === 'true')
            fetchMessage();
        else
            fetchMessageBySender();
    }, []);

    return (
        <div>
            <NavMenu />
            <h1 className="dashboard-title">My Dashboard</h1>
            <div className="dashboard">
                <div className="sidebar">
                    <button
                        className={getActiveClass('profile')}
                        onClick={() => setActiveTab('profile')}
                    >
                        My Profile
                    </button>
                    <button
                        className={getActiveClass('media')}
                        onClick={() => setActiveTab('media')}
                    >
                        Media
                    </button>
                    <button
                        className={getActiveClass('messages')}
                        onClick={() => setActiveTab('messages')}
                    >
                        Messages
                    </button>
                </div>

                <div className="content">
                    {activeTab === 'profile' && (
                        <div className="profile-tab">
                            <h2 className="profile-section-title">Profile</h2>
                            <img src={placeholderImage} alt="Profile" className="profile-image" />
                            <div className="profile-info">
                                <h3>Name:</h3>
                                <p>{fullname}</p>
                                {isTutor ? (
                                    <>
                                    <h3>Title:</h3>
                                    <p>Placeholder for the title</p>
                                    <h3>Topics:</h3>
                                    <p>Placeholder for topics</p>
                                    <h3>Description:</h3>
                                    <p>Placeholder for a longer description...</p>
                                    </>
                                ) : (<></>)}
                            </div>
                            {isTutor ? (
                                    <>
                            <button className="edit-button" onClick={display}>Edit Description</button>
                            <div className="post-container">
                                <h3>Posts:</h3>
                                <button className="post-button">Create post</button>

                                {/* <PostWindow /> */}

                                <div className="post-title">
                                    

                                </div>
                            </div>
                            </>) : (<></>)}
                        </div>
                    )}
                    {activeTab === 'media' && (
                        <div className="media-tab">
                            <h2 className="media-section-title">Media</h2>
                            <div className="media-grid">
                                {mediaItems.map(item => (
                                    <div key={item.id} className="media-item">
                                        <img src={item.image} alt={item.title} className="media-image" />
                                        <p className="media-title">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="edit-media-button">Edit Media</button>
                        </div>
                    )}

                    {activeTab === 'messages' && (
                        <div className="messages-tab">
                            <h2 className="messages-title">Messages</h2>
                            {chatMessages.map(chat => (
                                // <div key={chat.id} className="chat-item">
                                //     <img src={placeholderImage} className="chat-image" />
                                //     <div className="chat-info">
                                //         <div className="chat-name">{chat.SenderId}</div>
                                //         <div className="chat-message">{chat.text}</div>
                                //     </div>
                                //     <div className="chat-time">{chat.createdtime}</div>
                                // </div>
                                <div>{chat}</div>
                            ))}
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;