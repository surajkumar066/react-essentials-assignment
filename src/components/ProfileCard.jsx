import SkillBadge from "./SkillBadge";
import LikeButton from "./LikeButton";

function ProfileCard({
  name,
  title,
  bio,
  photo,
  skills,
  likes,
  onToggleTheme,
  onCyclePhoto,
  onShowAlert,
  onLike,
}) {
  return (
    <div className="profile-card">
      <img src={photo} alt={name} className="profile-photo" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{bio}</p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <div className="button-group">
        <button onClick={onToggleTheme}>Switch Theme</button>
        <button onClick={onCyclePhoto}>Change Photo</button>
        <button onClick={onShowAlert}>Say Hi</button>
      </div>

      <LikeButton likes={likes} onLike={onLike} />
    </div>
  );
}

export default ProfileCard;