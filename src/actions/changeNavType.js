

import { NAV_TYPE } from '../constants/constNavigation';


export default function changeNavType(navType, dateObj) {
    return (dispatch) => dispatch({
        type: NAV_TYPE,
        payload: {
            navType: navType,
            dateObj: dateObj,
        }
    });
}
