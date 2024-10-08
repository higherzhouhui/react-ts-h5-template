/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 22:06:34
 * @LastEditors: 小白
 * @LastEditTime: 2022-02-17 00:14:09
 */
import { White } from '@/typings';
import { lazy } from 'react';
const Search = lazy(() => import(/* chunkName: "Search" */ '@/pages/Search'));
const List = lazy(() => import(/* chunkName: List */ '@/pages/List'));
const Home = lazy(() => import(/* chunkName: Home */ '@/pages/Home'));
const Detail = lazy(() => import(/* chunkName: Detail */ '@/pages/Detail'));
const Index = lazy(() => import(/* chunkName: Index */ '@/pages/Index'));
const Other = lazy(() => import(/* chunkName: Other */ '@/pages/Other'));
const Other1 = lazy(() => import(/* chunkName: Other1 */ '@/pages/Other1'));
const NoFound = lazy(
  () => import(/* chunkName: NoFound */ '../components/NoFound'),
);

const homeIcon: any = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.8868 2.38138C12.7864 1.4912 11.2136 1.4912 10.1132 2.38138L3.11319 8.04416C2.40911 8.61374 2 9.4709 2 10.3765L2 19.0341C2 20.6909 3.34314 22.0341 5 22.0341H19C20.6569 22.0341 22 20.6909 22 19.0341L22 10.3765C22 9.4709 21.5909 8.61374 20.8868 8.04416L13.8868 2.38138ZM12 13C11.5858 13 11.25 13.3358 11.25 13.75V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V13.75C12.75 13.3358 12.4142 13 12 13Z" />
</svg>


const serverIcon: any = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3.44255C14.8947 1.40003 18.6463 1.52799 20.9395 3.82891C23.6868 6.58263 23.6868 11.0639 20.9395 13.8176L13.3234 21.4512C12.9698 21.8056 12.5009 22 12 22C11.4991 22 11.0302 21.8056 10.6766 21.4512L3.06054 13.8176C0.313152 11.0614 0.313152 6.58017 3.06054 3.82645C5.35372 1.52799 9.10284 1.39757 12 3.44255ZM7.23716 6.21152C7.63012 6.08053 7.84249 5.65579 7.7115 5.26283C7.58051 4.86988 7.15577 4.65751 6.76282 4.78849C4.80447 5.44128 3.70121 7.89715 4.27239 10.1819C4.37286 10.5838 4.78006 10.8281 5.1819 10.7276C5.58375 10.6272 5.82807 10.2199 5.72761 9.8181C5.2988 8.10286 6.19553 6.55873 7.23716 6.21152Z" />
</svg>


const orderIcon: any = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4.64001C2 2.98316 3.34315 1.64001 5 1.64001H19C20.6569 1.64001 22 2.98316 22 4.64001V20.5594C22 21.3979 21.0301 21.8641 20.3753 21.3403L17.6247 19.1398C17.2595 18.8476 16.7405 18.8476 16.3753 19.1398L12.6247 22.1403C12.2595 22.4324 11.7405 22.4324 11.3753 22.1403L7.6247 19.1398C7.25948 18.8476 6.74052 18.8476 6.37531 19.1398L3.6247 21.3403C2.96993 21.8641 2 21.3979 2 20.5594V4.64001ZM6.5 6.39001C6.5 5.9758 6.83579 5.64001 7.25 5.64001H16.75C17.1642 5.64001 17.5 5.9758 17.5 6.39001C17.5 6.80423 17.1642 7.14001 16.75 7.14001H7.25C6.83579 7.14001 6.5 6.80423 6.5 6.39001ZM8.75 9.64001C8.33579 9.64001 8 9.9758 8 10.39C8 10.8042 8.33579 11.14 8.75 11.14H15.25C15.6642 11.14 16 10.8042 16 10.39C16 9.9758 15.6642 9.64001 15.25 9.64001H8.75Z" />
</svg>


const assetsIcon: any = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 5.5C1.5 3.84315 2.84315 2.5 4.5 2.5H19.5C21.1569 2.5 22.5 3.84315 22.5 5.5V8.5H17C15.3431 8.5 14 9.84315 14 11.5V12.5C14 14.1569 15.3431 15.5 17 15.5H22.5V18.5C22.5 20.1569 21.1569 21.5 19.5 21.5H4.5C2.84315 21.5 1.5 20.1569 1.5 18.5V5.5ZM15.5 12C15.5 10.8954 16.3954 10 17.5 10H22.5V14H17.5C16.3954 14 15.5 13.1046 15.5 12ZM18.5 12C18.5 12.4142 18.1642 12.75 17.75 12.75C17.3358 12.75 17 12.4142 17 12C17 11.5858 17.3358 11.25 17.75 11.25C18.1642 11.25 18.5 11.5858 18.5 12Z" />
</svg>


const communityIcon: any = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 6C1.5 3.79086 3.29086 2 5.5 2H18.5C20.7091 2 22.5 3.79086 22.5 6V15C22.5 17.2091 20.7091 19 18.5 19H10.8094L9.36602 21.5C8.98112 22.1667 8.01887 22.1667 7.63397 21.5L6.19059 19H5.5C3.29086 19 1.5 17.2091 1.5 15V6ZM7.57354 10.2272C7.42286 9.84134 6.98793 9.65071 6.6021 9.80139C6.21626 9.95207 6.02563 10.387 6.17631 10.7728C7.08498 13.0996 9.34882 14.75 12 14.75C14.6511 14.75 16.915 13.0996 17.8237 10.7728C17.9743 10.387 17.7837 9.95207 17.3979 9.80139C17.012 9.65071 16.5771 9.84134 16.4264 10.2272C15.735 11.9978 14.0128 13.25 12 13.25C9.98718 13.25 8.26501 11.9978 7.57354 10.2272Z" />
</svg>


export const TabBarList: White.RouteTabBar[] = [
  {
    path: '/',
    component: Home,
    icon: homeIcon,
    sceneMode: 'scroll',
    title: '首页',
  },
  {
    path: '/detail',
    component: Detail,
    icon: serverIcon,
    sceneMode: 'scroll',
    title: '服务',
  },
  {
    path: '/list',
    component: List,
    icon: orderIcon,
    sceneMode: 'scroll',
    title: '订单',
  },
  {
    path: '/search',
    component: Search,
    icon: assetsIcon,
    sceneMode: 'scroll',
    title: '资产',
  },
  {
    path: '/search',
    component: Search,
    icon: communityIcon,
    sceneMode: 'scroll',
    title: '社区',
  },
];

const routes: White.RouteConfig[] = [
  {
    path: '/',
    component: Index,
    tabBars: TabBarList,
  },
  {
    path: '/other',
    component: Other,
  },
  {
    path: '/other1',
    sceneMode: 'bottom',
    component: Other1,
  },
  {
    path: '/dcotorDetail',
    component: Detail,
  },
  {
    path: '*',
    component: NoFound,
  },
];

export default [...routes];
