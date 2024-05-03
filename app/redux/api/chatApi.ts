import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Создаем API для взаимодействия с вашим сервером или API
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://countertrade.vit.ooo/v1/api' }), // Укажите базовый URL вашего API
  endpoints: (builder) => ({
    getUserChats: builder.query({
      query: (userId: string) => `/user/${userId}`,
    }),

    getChatMessages: builder.query({
      query: (chatId: string) => `/chat/${chatId}`,
    }),
  }),
});

// Экспортируем методы для вызова API
export const { useGetUserChatsQuery, useGetChatMessagesQuery } = chatApi;