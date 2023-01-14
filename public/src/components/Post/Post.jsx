import React from 'react'
import "./Post.css"
// import { MoreVert } from '@mui/icons-material'
// import {MoreVert} from '@mui/icons-material';

const Post = ({post}) => {
  console.log(post);
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className="postTopLeft">
                {/* https://png.pngtree.com/png-clipart/20190516/original/pngtree-purple-samurai-e-sports-logo-for-gaming-mascot-or-twitch-profile-png-image_4278450.jpg */}
                    <img className="postProfileImg" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-purple-samurai-e-sports-logo-for-gaming-mascot-or-twitch-profile-png-image_4278450.jpg" alt="profilepic" />
                 </div>
                 <span className='postUserName'>Sanjay</span>
                 <span className='postDate'>{post.date}</span>
                {/* <MoreVert/> */}
                 
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
            <span className="postText">{post.desc} </span>
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/elden-ring.jpg?c=16x9&q=h_720,w_1280,c_fill" alt="" />
            </div>
            <div className="postBottom">
               <div className="postBottomLeft">
              <img className="likeIcon" src="/assets/like.png" alt="" />
              <img className="likeIcon" src="/assets/heart.png" alt="" />
              <span className="postLikeCounter">{post.like} people like it</span>
              <span className="postacommentText"> {post.comment} comments</span>
              </div>
              {/* <MoreVert /> */}
                 
            </div>

        </div>
        
    </div>
  )
}

export default Post