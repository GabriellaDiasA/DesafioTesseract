const Member = ({member, onToggle}) => {
    return (
        <div
            className={`member ${member.selected ? 'selected' : ''}`}
            onClick={() => onToggle(member.id)}>
            <h4>{member.login}</h4>
            <img
                className="memberAvatar"
                src={member.avatar_url}
                alt="Membro do time Tesseract"></img>
        </div>
    );
};

export default Member;