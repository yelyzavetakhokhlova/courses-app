// eslint-disable-next-line import/no-named-default
import { default as axiosLib } from 'axios';

import { CONSTANTS } from '../../constants';

export const axios = axiosLib.create({ baseURL: `${CONSTANTS.BASE_URL}/api` });
