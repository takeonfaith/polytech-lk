import Chats from '../Data/Messages/Chats.json'
import StudentsData from '../Data/StudentsData.json'

export default function createDialog(name, photo, linkToChat, linkIndex) {
	if (StudentsData.name != name) {
		if (linkIndex === -1) {
			Chats.push({
				id: Chats.length,
				name: name,
				photo: photo,
				chatLink: linkToChat,
				seen: true,
				chatData: []
			})
		}
	}
}