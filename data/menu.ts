export type MenuItem = {
  name: string;
  path?: string;
  icon?: string;
  action?: string;
  isLogin?: boolean;
  routeList?: MenuItem[];
};

export const menu: MenuItem[] = [
  {
    name: "Trang chủ",
    path: "home",
    icon: "bi bi-house text-[20px] mr-[8px]",
    isLogin: false,
    action: "redirect",
  },
  {
    name: "Danh mục sản phẩm",
    icon: "bi bi-list-ul text-[22px] mt-[2px] mr-[8px]",
    routeList: [
      {
        path: "home",
        name: "Quần áo Nam",
        action: "redirect",
      },
      {
        path: "home",
        name: "Quần áo Nữ",
        action: "redirect",
      },
      {
        path: "home",
        name: "Điện thoại",
        action: "redirect",
      },
    ],
    isLogin: false,
    action: "redirect",
  },
  {
    path: "cart",
    name: "Giỏ hàng",
    icon: "bi bi-cart text-[20px] mr-[8px]",
    action: "redirect",
  },
  {
    path: "home",
    name: "Cuộc trò chuyện",
    icon: "bi bi-chat text-[20px] mr-[8px]",
    isLogin: true,
    action: "redirect",
  },
  {
    name: "Quản lý tài khoản",
    icon: "bi bi-gear text-[20px] mr-[8px]",
    routeList: [
      {
        path: "buyer.profile",
        name: "Quản lý thông tin cá nhân",
        action: "redirect",
      },
      {
        path: "buyer.order",
        name: "Đơn mua",
        action: "redirect",
      },
      {
        path: "buyer.notice",
        name: "Thông báo",
        action: "redirect",
      },
      {
        path: "buyer.ship",
        name: "Địa chỉ giao hàng",
        action: "redirect",
      },
    ],
    isLogin: true,
    action: "redirect",
  },
  {
    name: "Quản lý trang bán hàng",
    icon: "bi-shop-window text-[20px] mr-[8px]",
    routeList: [
      {
        path: "maker.my-sell",
        name: "Đơn đặt hàng",
        action: "redirect",
      },
      {
        path: "maker.purchase-order",
        name: "Trang bán hàng",
        action: "redirect",
      },
    ],
    isLogin: true,
    action: "redirect",
  },
  {
    name: "Đăng xuất",
    icon: "bi bi-box-arrow-left text-[20px] mr-[8px]",
    isLogin: true,
    action: "logout",
  },
];
