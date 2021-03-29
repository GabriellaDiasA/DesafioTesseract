import Member from './Member.js';

const Tesseract = ({members, onToggle}) => {
    return (
        <div
            className="tesseract">
            {
            members.map(member =>  
                <Member
                    key={member.id}
                    onToggle={onToggle}
                    member={member} />
            )}
        </div>
    );
};

export default Tesseract;
