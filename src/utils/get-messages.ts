import { MessageDescriptor } from "react-intl";

type F = Record<string, string>;
export const getMessages = (msg: MessageDescriptor[]): F => {
  return msg.reduce((acc, item) => {
    acc[item.id as string] = item.defaultMessage || "";

    return acc;
  }, {} as F);
};
