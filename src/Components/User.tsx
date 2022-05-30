import React, { FC } from 'react';
import UserModel from '../types/models';

//system 1
// const User = (props: { name: string }) => {
//system 2    
// const User: FC<{ name: string, age?: number }> = (props) => {
//system 3
// interface Props {
//     name: string,
//     age?: number,
//     addUser: () => void
// }

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}
const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h3>hello from {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <button onClick={() => addUser(user)}>add me</button>
        </div>
    );
};

export default User;