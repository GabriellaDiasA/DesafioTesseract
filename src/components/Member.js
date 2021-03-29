const Member = ({member, onToggle, followers, repos, date}) => {
    return (
        <div
            className="memberContainer">
            <div
                className={`member ${member.selected ? 'selected' : ''}`}
                onClick={() => onToggle(member.id)}>
                <h4>{member.login}</h4>
                <img
                    className="memberAvatar"
                    src={member.avatar_url}
                    alt="Membro do time Tesseract"></img>
            </div>
            {
                member.selected && (
                    <div className="memberDetail">
                    <h4>{member.login}</h4>
                    <h4>Repositórios: {repos[0].reposNum}</h4>
                    <h4>Followers: {followers[0].followersNum}</h4>
                    <p className="date">Joined: {date[0].created_at}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Member;