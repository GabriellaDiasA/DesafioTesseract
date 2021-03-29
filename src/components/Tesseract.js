import Member from './Member.js';

const Tesseract = ({members, onToggle, repos, followers, date}) => {
    return (
        <div
            className="tesseract">
            {
            members.map(member =>  
                <Member
                    key={member.id}
                    onToggle={onToggle}
                    member={member}
                    repos={repos.filter((rep) => rep.id === member.id)}
				    followers={followers.filter((fol) => fol.id === member.id)}
                    date={date.filter((dat) => dat.id === member.id)} />
            )}
        </div>
    );
};

export default Tesseract;
