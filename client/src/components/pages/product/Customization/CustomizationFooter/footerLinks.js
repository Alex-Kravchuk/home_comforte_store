import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";

export const footerLinks = [
	{
		id: 1,
		to: 'help',
		icon: <DesignServicesOutlinedIcon/>,
		text: 'Need help? View our design services',
	},
	{
		id: 2,
		to: 'delivery',
		icon: <LocalShippingOutlinedIcon/>,
		text: '$249 flat rate delivery',
	},
	{
		id: 3,
		to: 'returns',
		icon: <AssignmentReturnOutlinedIcon/>,
		text: '60-day returns',
	},
]