import type { Dispatch, SetStateAction } from "react";

export interface IAddRoomContext {
  addRoom: boolean;
  setAddRoom: Dispatch<SetStateAction<boolean>>;
  roomType: string;
  setRoomType: Dispatch<SetStateAction<string>>;
  room: {
    roomName: string;
    roomPassword: string;
  };
  setRoom: Dispatch<
    SetStateAction<{
      roomName: string;
      roomPassword: string;
    }>
  >;
}

export interface ILoadingContext {
  isLoadingState: boolean;
  setIsLoadingState: Dispatch<SetStateAction<boolean>>;
}

export interface IRoomContext {
  room: string;
  setRoom: Dispatch<React.SetStateAction<string>>;
}

export interface IRoomPasswordContext {
  passwordComponent: boolean;
  setPasswordComponent: Dispatch<SetStateAction<boolean>>;
  roomID: string;
  setRoomID: Dispatch<SetStateAction<string>>;
}

export interface ISearchContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface IThemeContext {
  theme: string;
  changeThemeHandler: () => void;
}

export interface IUpdateAccountProfile {
  name: string;
  username: string;
  email: string;
}

export interface IUpdateAccountContext {
  profileState: IUpdateAccountProfile;
  setProfileState: Dispatch<SetStateAction<IUpdateAccountProfile>>;
}

export interface INotification {
  id: string;
  userId: string;
  sentTo: string;
  from: string;
  senderName: string;
  image: string;
  message: string;
  read: boolean;
  timeSent: Date;
}

export interface ISocketMessage {
  room: string;
  message: string;
  senderID: string;
  senderName: string;
  timeSent: Date;
}

export interface ISocketTyping {
  message: string;
  status: boolean;
}

export interface IAccountInfoProps {
  data: {
    name: string | null;
    username: string | null;
    email: string | null;
    emailVerified: Date | null;
  };
}

export interface IInputPasswordTogglerProps {
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export interface IChatDataListProps {
  data: (
    | {
        id: string;
        type: string;
        name: string | null;
        username: string | null;
        email: string | null;
        verificationToken: string | null;
        emailVerified: Date | null;
        friends: string[];
        image: string | null;
      }
    | {
        id: string;
        type: string;
        roomName: string;
        roomType: string;
        roomPassword: string | null;
        participants: string[];
      }
  )[];
}

export interface IRadioInputProps {
  className: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export interface IFriendListProps {
  data: {
    id: string;
    name: string | null;
    username: string | null;
    email: string | null;
    verificationToken: string | null;
    emailVerified: Date | null;
    friends: string[];
    image: string | null;
  }[];
}

export interface IModifiedUser {
  data: {
    id: string;
    name: string | null;
    username: string | null;
    email: string | null;
    verificationToken: string | null;
    emailVerified: Date | null;
    friends: string[];
    image: string | null;
  };
  friend: boolean;
}

export interface IRoom {
  id: string;
  roomName: string;
  roomType: string;
  roomPassword: string | null;
  participants: string[];
}

export interface INotificationProps {
  id: string;
  userId: string;
  sentTo: string;
  from: string;
  senderName: string;
  image: string;
  message: string;
  read: boolean;
  timeSent: Date;
}

export interface IUserProps {
  data: {
    id: string;
    name: string;
    friend: boolean;
    image: string | null;
  };
}

export interface IViewRoomProps {
  setViewRoomComponent: Dispatch<React.SetStateAction<JSX.Element>>;
}

export interface ISearch {
  data:
    | {
        id: string;
        type: string;
        name: string | null;
        username: string | null;
        email: string | null;
        verificationToken: string | null;
        emailVerified: Date | null;
        friends: string[];
        image: string | null;
      }
    | {
        id: string;
        type: string;
        roomName: string;
        roomType: string;
        roomPassword: string | null;
        participants: string[];
      };
}
