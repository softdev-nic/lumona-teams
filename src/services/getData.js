import API from "./api";
import { useStore } from "../useStore";

export const getMembers = async () => {
  try {
    const response = await API.get('/api/teams/getmembers');
    useStore.setState({ Members: response.data.members });
    console.log(useStore.getState().Members);
    return response.data.members;
  } catch (error) {
    console.error('Error fetching members:', error);
  }
};
export const getPendingInvites = async () => {
  try {
    const response = await API.get('/api/teams/getpendinginvites');
    useStore.setState({ PendingInvites: response.data.invites });
    console.log(useStore.getState().PendingInvites);
    return response.data.invites;
  } catch (error) {
    console.error('Error fetching pending invites:', error);
  }
}