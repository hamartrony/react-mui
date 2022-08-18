import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface ILinkToProps{
    to: string;
    label: string;
    onClick: (() => void) | undefined;
}

export const LinkTo = ({to, label, onClick}: ILinkToProps) =>{
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: false});

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return(
        <ListItem disablePadding>
            <ListItemButton selected={!!match} onClick={handleClick}>
                <ListItemText primary={label} />
            </ListItemButton>
        </ListItem>

    );
};