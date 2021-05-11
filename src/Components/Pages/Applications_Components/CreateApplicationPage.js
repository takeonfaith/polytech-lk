import React, { useState } from 'react'
import { CustomSelect } from '../../General_Components/CustomSelect'
import WideBtn from '../../General_Components/wideBtn'
import Switch from '../../General_Components/Switch'
export const CreateApplicationPage = () => {
	const selectOptions = [
		{
			id: 0,
			option: 'Выберите',
			icon: ''
		},
		{
			id: 1,
			option: 'Сироты или оставшиеся без попечения родителей',
			icon: ''
		},
		{
			id: 2,
			option: 'Инвалиды',
			icon: ''
		},
		{
			id: 3,
			option: 'Члены многодетной семьи',
			icon: ''
		},
		{
			id: 4,
			option: 'Имеющие на иждивении ребенка',
			icon: ''
		},
		{
			id: 5,
			option: 'Участники военных действий',
			icon: ''
		},
		{
			id: 6,
			option: 'Пострадавшие в результате аварии на Чернобыльской АЭС и других радиационных катастроф',
			icon: ''
		},
		{
			id: 7,
			option: 'Родители - инвалиды, пенсионеры',
			icon: ''
		},
		{
			id: 8,
			option: 'Члены неполной семьи',
			icon: ''
		},
		{
			id: 9,
			option: 'Хроническое заболевание',
			icon: ''
		}
	]
	const [currentNumberOption, setCurrentNumberOption] = useState(0)
	const [currentOption, setCurrentOption] = useState(selectOptions[currentNumberOption].option)
	const [currentSwitchPos, setCurrentSwitchPos] = useState(0)
	const [paymentWaySwitch, setPaymentWaySwitch] = useState(0)
	var documentsNeeded = ""
	documentsNeeded = ""
	if (currentOption == "Выберите") documentsNeeded = "Выберите основание для получения справки"
	else if (currentOption == "Сироты или оставшиеся без попечения родителей") documentsNeeded = "копии свидетельств о смерти родителей или копия решения суда о лишении их родительских прав или справка (копия) из органов опеки о признании студента сиротой или оставшимся без попечения родителей; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Инвалиды") documentsNeeded = "справка (копия) об инвалидности; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Члены многодетной семьи") documentsNeeded = "справка из ЖЭКа о составе семьи или копия удостоверения многодетной семьи или копия паспорта родителя страницы 2, 3, 16, 17; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Имеющие на иждивении ребенка") documentsNeeded = "копия свидетельства о рождении ребёнка; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Участники военных действий") documentsNeeded = "копия военного билета с соответствующей отметкой; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Пострадавшие в результате аварии на Чернобыльской АЭС и других радиационных катастроф") documentsNeeded = "копия удостоверения или справка (копия) с места постоянной прописки; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == "Родители - инвалиды, пенсионеры") documentsNeeded = "копии пенсионных или инвалидных удостоверений родителей, паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == 'Члены неполной семьи') documentsNeeded = "копия свидетельства о смерти или расторжении брака или книжки одинокой матери или свидетельства о рождении с прочерком в графе «Отец», при заполненной графе необходима справка из ЗАГСа о внесении записи об отце со слов матери; копия паспорта страницы 2,3,14 родителя, с которым остался студент; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	else if (currentOption == 'Хроническое заболевание') documentsNeeded = "справка от врача с места постоянной регистрации о постановке на диспансерный учёт с хроническим заболеванием; копия паспорта студента страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации"
	return (
		<div className="CreateApplicationPage">
			<div className="CreateApplicationPage_section">
				После получения положительного решения необходимо прийти в Профком за распечатанным заявлением и принести с собой все необходимые документы.
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Контактные данные:</h3>
				<div style={{ display: 'flex' }}>
					<input type="tel" placeholder="Телефон" />
					<input type="email" placeholder="E-Mail" />
				</div>
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Основание для получения дотации</h3>
				<CustomSelect selectOptions={selectOptions} currentOption={currentOption} changeOption={setCurrentOption} currentNumberOption={currentNumberOption} changeCurrentNumberOption={setCurrentNumberOption} shortWordRestrict={window.innerWidth < 700 ? 30 : 60} />
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Прошу назначить меня на получение материальной поддержки остронуждающимся студентам в 2021 году в связи с тем, что:</h3>
				<input type="text" name="" id="" placeholder="Укажите причину" />
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Номер членского профсоюзного билета</h3>
				<input type="text" name="" id="" placeholder="Номер членского профсоюзного билета" />
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Адрес по месту регистрации:</h3>
				<input type="text" name="" id="" placeholder="индекс, область, город, улица, дом, корпус, квартира" />
			</div>
			<div className="CreateApplicationPage_section">
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Switch currentPosition={currentSwitchPos} callBackFunc={setCurrentSwitchPos} />
					<span style={{ marginLeft: '7px' }}>Гражданин иностранного государства</span>
				</div>
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Способ выплаты:</h3>
				<div id={0} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
					<Switch currentPosition={!paymentWaySwitch} callBackFunc={setPaymentWaySwitch} />
					<span style={{ marginLeft: '7px' }}>Выплату прошу производить наличным путем</span>
				</div>
				<div id={1} style={{ display: 'flex', alignItems: 'center' }}>
					<Switch currentPosition={paymentWaySwitch} callBackFunc={setPaymentWaySwitch} />
					<span style={{ marginLeft: '7px' }}>Выплату производить безналичным путем на счет Сбербанк:</span>
				</div>
				<input type="text" id="" placeholder="XXXX XXXX XXXX XXXX" style={paymentWaySwitch != 1 ? { display: 'none' } : {}} />
			</div>
			<div className="CreateApplicationPage_section">
				<h3>Загрузите необходимые документы</h3>
				<div className = "documentsNeeded" style = {{margin:'10px 0'}}>{documentsNeeded}</div>
				<WideBtn btnText = "Присоединить файлы" func = {()=>null} bg = "grey"/>
			</div>
			<div className="bottomBtnWrapper">
				<WideBtn btnText="Отправить" func={() => null} bg="linear-gradient(45deg, #9be15d 0%, #00e3ae 100%)" />
				<WideBtn btnText="Отмена" func={() => null} bg="linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)" />
			</div>
		</div>
	)
}
