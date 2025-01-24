import Config from '~/config';
import {HeaderOnly} from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//public roites

const publicRoutes = [ 
    {path: Config.routes.home, Component: Home},
    {path: Config.routes.following,Component: Following},
    {path: Config.routes.profile,Component: Profile},
    {path: Config.routes.upload,Component: Upload, layout : HeaderOnly},
    {path: Config.routes.search,Component: Search, layout: null},
    {path: Config.routes.live,Component: Live, layout: null},
    

];
const privateRoutes = [

];

export { publicRoutes, privateRoutes };