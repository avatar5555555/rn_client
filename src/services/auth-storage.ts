import AsyncStorage from "@react-native-community/async-storage"

const TOKEN = "token"

export const authStorage = {
  getToken: () => AsyncStorage.getItem(TOKEN),
  setToken: (token: string) => AsyncStorage.setItem(TOKEN, token),
}
