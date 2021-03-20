import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UesContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [shareData] = useContext(UesContext);
    return (
        <Route
    {...rest}
        render={({ location }) =>
            shareData.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
    />
    );
};

export default PrivateRoute;