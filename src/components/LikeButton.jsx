function LikeButton({ likes, onLike }) {
  return (
    <button className="like-btn" onClick={onLike}>
      ❤️ Like ({likes})
    </button>
  );
}

export default LikeButton;