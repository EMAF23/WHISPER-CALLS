import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth } from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore";
import "./detail.css"

const Detail = () => {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock= async () =>{
    if(!user) return;

    const userDocRef = doc(db, "users", currentUser.id)

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
      });
      changeBlock()
    } catch (err) {
      console.log(err)
    }

  };
    return (
        <div className="detail">
            <div className="user">   
              <img src={user?.avatar || "./avatar.png"} alt="" />
              <h2>{user?.username}</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste a 
                quis natus tempora officia voluptas reprehenderit, iusto sunt.
              </p>
            </div>
            <div className="info">  
              <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
              </div>
              <div className="option">
                <div className="title">
                    <span>Privacy & help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
              </div>
              <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="d:\EJ Resources\Processed photos\travel hack thumnail 1.png" alt="" />
                        <span>ej_desiagns.png</span>
                        </div>
                    
                    <img src="./download.png" alt="" className="icon"/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="d:\EJ Resources\Processed photos\travel hack thumnail 1.png" alt="" />
                        <span>ej_desiagns.png</span>
                        </div>
                    
                    <img src="./download.png" alt="" className="icon"/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="d:\EJ Resources\Processed photos\travel hack thumnail 1.png" alt="" />
                        <span>ej_desiagns.png</span>
                        </div>
                    
                    <img src="./download.png" alt="" className="icon"/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">

                        <img src="d:\EJ Resources\Processed photos\travel hack thumnail 1.png" alt="" />
                        <span>ej_desiagns.png</span>
                        </div>
                    
                    <img src="./download.png" alt="" className="icon"/>
                    </div>
                </div>
              </div>
              <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
              </div>
              <button onClick={handleBlock}>
                {
                  isCurrentUserBlocked ? "You are Blocked!" :isReceiverBlocked ? "User Blocked" : "Block User"
                }

              </button>
              <button className="logout" onClick={()=>auth.signOut()}>Log out</button>
             </div>
        </div>
    )
}

export default Detail