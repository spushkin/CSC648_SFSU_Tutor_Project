import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import NavMenu from './NavMenu';
import placeholderImage from '../images/sillouette.jpg';
import placeholderMedia from '../images/sfLibrary.png';

function Dashboard() {
    // State for the active tab
    const [activeTab, setActiveTab] = useState('profile');

    // Placeholder data for the media items
    const mediaItems = [
        { id: 0, title: 'Media 1', image: placeholderMedia },
        { id: 1, title: 'Media 2', image: placeholderMedia },
        { id: 2, title: 'Media 3', image: placeholderMedia },
        { id: 3, title: 'Media 4', image: placeholderMedia },
    ];
    // Placeholder data for chats
    const chatMessages = [
        {
            id: 1,
            name: "Student Name",
            message: "Last message text here...",
            time: "13:00",
            image: placeholderImage
        },
        {
            id: 3,
            name: "Student Name",
            message: "Last message text here...",
            time: "12:45",
            image: placeholderImage
        },
        {
            id: 4,
            name: "Student Name",
            message: "Last message text here...",
            time: "12:30",
            image: placeholderImage
        },
        {
            id: 5,
            name: "Student Name",
            message: "Last message text here...",
            time: "08:00",
            image: placeholderImage
        }
    ];

    const display = () => {
        console.log(sessionStorage);
    }

    const getActiveClass = (tabName) => activeTab === tabName ? 'active' : '';

    const [options, setOptions] = useState([]);
  	const [selectedOption, setSelectedOption] = useState('');
    const messageApi = "http://localhost:8003/getMessage";

    useEffect(() => {
		// Fetch dynamic data (replace this with your data-fetching logic)
		const fetchData = async () => {
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

            console.log("herer goes a error");

			const data = await response.json();
			console.log(data);
			setOptions(data);
		  } catch (error) {
			console.error('Error fetching options:', error);
		  }
		};
        fetchData();
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
                                <p>Placeholder for the name</p>
                                <h3>Title:</h3>
                                <p>Placeholder for the title</p>
                                <h3>Topics:</h3>
                                <p>Placeholder for topics</p>
                                <h3>Description:</h3>
                                <p>Placeholder for a longer description...</p>
                            </div>
                            <button className="edit-button" onClick={display}>Edit Description</button>
                            <div className="post-container">
                                <h3>Posts:</h3>
                                <button className="post-button">Create post</button>

                                <div className="createpost-window">
                                    <h3>Enter post details:</h3>
                                    <div className="text-box">
                                        <textarea placeholder="Limit to 500 Characters"></textarea>
                                    </div>
                                    <button className="post-button">Submit request</button>
                                </div>

                                <div className="post-title">
                                    <div className="posts">
                                        <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                    <div className="posts">
                                    <p className="center"><b>Name of User</b></p>
                                        <p className="center"><br/>Here will go a small description of the users post which will detail any posts they have made</p>

                                    </div>
                                </div>
                            </div>
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
                                <div key={chat.id} className="chat-item">
                                    <img src={placeholderImage} className="chat-image" />
                                    <div className="chat-info">
                                        <div className="chat-name">{chat.name}</div>
                                        <div className="chat-message">{chat.text}</div>
                                    </div>
                                    <div className="chat-time">{chat.createdtime}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;