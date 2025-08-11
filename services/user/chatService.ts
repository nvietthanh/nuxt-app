import type { Message } from "@/types/users/chat/message";
import type { Channel } from "@/types/users/chat/channel";

export const getChannelList = async (params: {
  page?: number;
  limit?: number;
}): Promise<Channel[]> => {
  const { $axios } = useNuxtApp();

  const channels: Channel[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Kênh Hỗ Trợ",
          last_message: {
            id: 101,
            user_id: 2,
            content: "Bạn cần hỗ trợ gì thêm không?",
            attachments: null,
            quote: null,
            created_at: "2025/08/18 10:01:00",
          },
          created_at: "2025/08/18 09:55:00",
        },
        {
          id: 2,
          name: "Thanh test",
          last_message: {
            id: 102,
            user_id: 1,
            content: "Tôi đang kiểm tra.",
            attachments: null,
            quote: null,
            created_at: "2025/08/18 09:59:00",
          },
          created_at: "2025/08/18 09:40:00",
        },
        {
          id: 3,
          name: "Dev Chat",
          last_message: {
            id: 103,
            user_id: 3,
            content: "Push code lên rồi nhé.",
            attachments: null,
            quote: null,
            created_at: "2025/08/17 16:23:00",
          },
          created_at: "2025/08/17 15:50:00",
        },
        {
          id: 4,
          name: "Marketing Team",
          last_message: {
            id: 104,
            user_id: 4,
            content: "Chiến dịch mới bắt đầu tuần sau.",
            attachments: null,
            quote: null,
            created_at: "2025/08/17 14:45:00",
          },
          created_at: "2025/08/17 14:00:00",
        },
        {
          id: 5,
          name: "CSKH",
          last_message: {
            id: 105,
            user_id: 5,
            content: "Khách hàng đã phản hồi.",
            attachments: null,
            quote: null,
            created_at: "2025/08/17 13:05:00",
          },
          created_at: "2025/08/17 13:00:00",
        },
        {
          id: 6,
          name: "Team A",
          last_message: {
            id: 106,
            user_id: 6,
            content: "Cuộc họp lúc 10h sáng mai nhé.",
            attachments: null,
            quote: null,
            created_at: "2025/08/17 12:00:00",
          },
          created_at: "2025/08/17 11:30:00",
        },
        {
          id: 7,
          name: "Team B",
          last_message: {
            id: 107,
            user_id: 2,
            content: "Đã cập nhật file tài liệu.",
            attachments: null,
            quote: null,
            created_at: "2025/08/16 16:20:00",
          },
          created_at: "2025/08/16 15:00:00",
        },
        {
          id: 8,
          name: "Thiết kế UI/UX",
          last_message: {
            id: 108,
            user_id: 3,
            content: "Mockup hoàn chỉnh đã xong.",
            attachments: null,
            quote: null,
            created_at: "2025/08/16 11:00:00",
          },
          created_at: "2025/08/16 10:00:00",
        },
        {
          id: 9,
          name: "Dự án Z",
          last_message: {
            id: 109,
            user_id: 7,
            content: "Client muốn thay đổi giao diện.",
            attachments: null,
            quote: null,
            created_at: "2025/08/15 17:30:00",
          },
          created_at: "2025/08/15 17:00:00",
        },
        {
          id: 10,
          name: "Họp nội bộ",
          last_message: {
            id: 110,
            user_id: 4,
            content: "Tổng kết họp đã gửi qua mail.",
            attachments: null,
            quote: null,
            created_at: "2025/08/15 12:10:00",
          },
          created_at: "2025/08/15 12:00:00",
        },
        {
          id: 11,
          name: "Thử nghiệm API",
          last_message: {
            id: 111,
            user_id: 2,
            content: "API trả về lỗi 500.",
            attachments: null,
            quote: null,
            created_at: "2025/08/14 14:00:00",
          },
          created_at: "2025/08/14 13:55:00",
        },
        {
          id: 12,
          name: "QA Testing",
          last_message: {
            id: 112,
            user_id: 5,
            content: "Test case pass hết rồi.",
            attachments: null,
            quote: null,
            created_at: "2025/08/14 11:11:00",
          },
          created_at: "2025/08/14 10:50:00",
        },
        {
          id: 13,
          name: "Design Assets",
          last_message: {
            id: 113,
            user_id: 6,
            content: "Tải xong bộ icon rồi.",
            attachments: null,
            quote: null,
            created_at: "2025/08/13 18:33:00",
          },
          created_at: "2025/08/13 18:00:00",
        },
        {
          id: 14,
          name: "Content Marketing",
          last_message: {
            id: 114,
            user_id: 3,
            content: "Bài viết tuần sau đã xong.",
            attachments: null,
            quote: null,
            created_at: "2025/08/13 17:25:00",
          },
          created_at: "2025/08/13 17:00:00",
        },
        {
          id: 15,
          name: "Team C",
          last_message: {
            id: 115,
            user_id: 1,
            content: "Xong sprint tuần này rồi.",
            attachments: null,
            quote: null,
            created_at: "2025/08/12 16:00:00",
          },
          created_at: "2025/08/12 15:30:00",
        },
        {
          id: 16,
          name: "Support Khách VIP",
          last_message: {
            id: 116,
            user_id: 7,
            content: "Đã xử lý khiếu nại.",
            attachments: null,
            quote: null,
            created_at: "2025/08/12 12:30:00",
          },
          created_at: "2025/08/12 12:00:00",
        },
        {
          id: 17,
          name: "Quản lý task",
          last_message: {
            id: 117,
            user_id: 2,
            content: "Đã hoàn thành 5 task hôm nay.",
            attachments: null,
            quote: null,
            created_at: "2025/08/12 10:10:00",
          },
          created_at: "2025/08/12 09:30:00",
        },
        {
          id: 18,
          name: "Thông báo hệ thống",
          last_message: {
            id: 118,
            user_id: 4,
            content: "Bảo trì hệ thống vào 00:00.",
            attachments: null,
            quote: null,
            created_at: "2025/08/11 18:00:00",
          },
          created_at: "2025/08/11 17:30:00",
        },
        {
          id: 19,
          name: "Sự kiện nội bộ",
          last_message: {
            id: 119,
            user_id: 5,
            content: "Off team thứ 6 tuần này nhé.",
            attachments: null,
            quote: null,
            created_at: "2025/08/11 16:45:00",
          },
          created_at: "2025/08/11 16:00:00",
        },
        {
          id: 20,
          name: "Chăm sóc khách hàng",
          last_message: {
            id: 120,
            user_id: 6,
            content: "Khách phản hồi tích cực.",
            attachments: null,
            quote: null,
            created_at: "2025/08/10 15:20:00",
          },
          created_at: "2025/08/10 15:00:00",
        },
      ]);
    }, 2000);
  });

  return channels;
};

export const getChannelDetail = async (channelId: number): Promise<Channel> => {
  const { $axios } = useNuxtApp();

  const channel: Channel = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Thanh test",
        created_at: "2025-08-01T08:01:05Z",
      });
    }, 1000);
  });

  return channel;
};

export const getMessagesByChannel = async (
  channelId: number,
  params: { page?: number; limit?: number }
): Promise<Message[]> => {
  const { $axios } = useNuxtApp();

  const messages: Message[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // {
        //   id: 30,
        //   user_id: 1,
        //   content: "Mình gửi bạn link tài liệu nhé.",
        //   attachments: null,
        //   quote: null,
        //   created_at: "2025-08-01T08:01:05Z",
        // },
        {
          id: 30,
          user_id: 1,
          content: "Mình gửi bạn link tài liệu nhé.",
          attachments: [
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
          ],
          quote: null,
          created_at: "2025-08-01T08:01:00Z",
        },
        {
          id: 29,
          user_id: 2,
          content: null,
          attachments: [
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
            {
              id: 1,
              name: "test",
              url: "/images/devices/example.webp",
              attributes: {
                size: 1,
                extension: "test",
              },
            },
          ],
          quote: null,
          created_at: "2025-08-01T08:00:00Z",
        },
        {
          id: 28,
          user_id: 1,
          content: "Chúc bạn một ngày tốt lành.",
          attachments: null,
          quote: {
            id: 3,
            user_id: 1,
            content: "Bạn cần mình hỗ trợ gì không?",
            attachments: null,
            quote: null,
            created_at: "2025-01-01T10:02:00Z",
          },
          created_at: "2025-04-01T09:07:00Z",
        },
        {
          id: 27,
          user_id: 2,
          content: "Hẹn gặp lại.",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:06:00Z",
        },
        {
          id: 26,
          user_id: 1,
          content: "Rất vui được hỗ trợ bạn.",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:05:00Z",
        },
        {
          id: 25,
          user_id: 2,
          content: "Cảm ơn bạn.",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:04:00Z",
        },
        {
          id: 24,
          user_id: 1,
          content: "Đã nâng cấp thành công.",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:03:00Z",
        },
        {
          id: 23,
          user_id: 2,
          content: "Gói Pro nhé.",
          attachments: null,
          quote: {
            id: 22,
            user_id: 1,
            content: "Bạn muốn nâng cấp lên gói nào?",
            attachments: null,
            quote: null,
            created_at: "2025-04-01T09:01:00Z",
          },
          created_at: "2025-04-01T09:02:00Z",
        },
        {
          id: 22,
          user_id: 1,
          content: "Bạn muốn nâng cấp lên gói nào?",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:01:00Z",
        },
        {
          id: 21,
          user_id: 2,
          content: "Mình muốn nâng cấp tài khoản.",
          attachments: null,
          quote: null,
          created_at: "2025-04-01T09:00:00Z",
        },
        {
          id: 20,
          user_id: 2,
          content: "Tuyệt vời!",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:09:00Z",
        },
        {
          id: 19,
          user_id: 1,
          content: "Tốt rồi, ảnh đã được tải lên thành công.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:08:00Z",
        },
        {
          id: 18,
          user_id: 2,
          content: "Gửi lại rồi nhé.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:07:00Z",
        },
        {
          id: 17,
          user_id: 1,
          content: "OK, bạn thử lại nhé.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:06:00Z",
        },
        {
          id: 16,
          user_id: 2,
          content: "Tôi sẽ đổi ảnh khác.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:05:00Z",
        },
        {
          id: 15,
          user_id: 1,
          content: "Lỗi do định dạng ảnh không hợp lệ.",
          attachments: null,
          quote: {
            id: 13,
            user_id: 2,
            content: "Đây là ảnh lỗi.",
            attachments: null,
            quote: null,
            created_at: "2025-03-03T12:02:00Z",
          },
          created_at: "2025-03-03T12:04:00Z",
        },
        {
          id: 14,
          user_id: 1,
          content: "Đã nhận được. Mình kiểm tra nhé.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:03:00Z",
        },
        {
          id: 13,
          user_id: 2,
          content: "Đây là ảnh lỗi.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:02:00Z",
        },
        {
          id: 12,
          user_id: 1,
          content: "Bạn gửi mình ảnh lỗi nhé.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:01:00Z",
        },
        {
          id: 11,
          user_id: 2,
          content: "Tôi bị lỗi khi tải ảnh.",
          attachments: null,
          quote: null,
          created_at: "2025-03-03T12:00:00Z",
        },
        {
          id: 10,
          user_id: 1,
          content: "Không có gì nhé!",
          attachments: null,
          quote: null,
          created_at: "2025-02-10T08:04:00Z",
        },
        {
          id: 9,
          user_id: 2,
          content: "Rất tốt. Cảm ơn bạn nhiều.",
          attachments: null,
          quote: null,
          created_at: "2025-02-10T08:03:00Z",
        },
        {
          id: 8,
          user_id: 1,
          content: "Có nhé, bên mình hỗ trợ 24/7.",
          attachments: null,
          quote: {
            id: 7,
            user_id: 2,
            content: "Bên bạn có hỗ trợ vào cuối tuần không?",
            attachments: null,
            quote: null,
            created_at: "2025-02-10T08:00:00Z",
          },
          created_at: "2025-02-10T08:02:00Z",
        },
        {
          id: 7,
          user_id: 2,
          content: "Bên bạn có hỗ trợ vào cuối tuần không?",
          attachments: null,
          quote: null,
          created_at: "2025-02-10T08:00:00Z",
        },
        {
          id: 6,
          user_id: 2,
          content: "Cảm ơn bạn.",
          attachments: null,
          quote: null,
          created_at: "2025-01-01T10:05:00Z",
        },
        {
          id: 5,
          user_id: 1,
          content: "OK, bạn thử nhập lại mật khẩu nhé.",
          attachments: null,
          quote: null,
          created_at: "2025-01-01T10:04:00Z",
        },
        {
          id: 4,
          user_id: 2,
          content: "Mình cần hỗ trợ về đăng nhập.",
          attachments: null,
          quote: {
            id: 3,
            user_id: 1,
            content: "Bạn cần mình hỗ trợ gì không?",
            attachments: null,
            quote: null,
            created_at: "2025-01-01T10:02:00Z",
          },
          created_at: "2025-01-01T10:03:00Z",
        },
        {
          id: 3,
          user_id: 1,
          content: "Bạn cần mình hỗ trợ gì không?",
          attachments: null,
          quote: null,
          created_at: "2025-01-01T10:02:00Z",
        },
        {
          id: 2,
          user_id: 2,
          content: "Chào bạn, mình là Thanh",
          attachments: null,
          quote: null,
          created_at: "2025-01-01T10:01:00Z",
        },
        {
          id: 1,
          user_id: 1,
          content: "Chào bạn, mình là Tuấn",
          attachments: null,
          quote: null,
          created_at: "2025-01-01T10:00:00Z",
        },
      ]);
    }, 2500);
  });

  return messages;
};
