import {useState} from "react"

const LikeButton = () => {
const [nooflike,setnooflikes]=useState(0);
const [whetherLiked,setwhetherLiked]=useState(false);
const whetherLikedit_or_not = () =>{
    setwhetherLiked(!whetherLiked);
    setnooflikes(whetherLiked ? nooflike-1 : nooflike+1);
};

return (
<div>
    <p>NO_of_likes ❤️:{nooflike}</p>
    <button onClick={whetherLikedit_or_not}>
        {whetherLiked ? "Notliked":"Liked"}
        </button>
</div>
);
};
export default LikeButton;