import UserFindMatches from "./UserFindMatches";
import UserInfo from "./UserInfo";

function User() {
    return (
        <div className="account">
            <UserInfo />
            <UserFindMatches />
        </div>
    )
}

export default User;