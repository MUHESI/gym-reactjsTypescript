import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useNavigate } from 'react-router-dom';


interface ILinks {
    icon: any,
    label: string,
    link: string
}
interface IPropsNavbarMenuList {
    mainTitle: string;
    links: ILinks[]
}

// TODO: Improve late
function NavbarMenuItems({
    mainTitle,
    links
}: IPropsNavbarMenuList) {
    const navigate = useNavigate()

    return (
        <NavigationMenu>
            <NavigationMenuList className=''>
                <NavigationMenuItem className='max-w-[90px]'>
                    <NavigationMenuTrigger>{mainTitle}</NavigationMenuTrigger>
                    <NavigationMenuContent className='bg-white min-w-[200px]  rounded-md px-2 py-2  border border-1 rounded-md'>
                        {links.map((item: ILinks, key: number) => <NavigationMenuLink onClick={() => navigate(`/${item.link}`)} key={key} className='block cursor-pointer py-2 transition hover:bg-primary-500  hover:text-white px-1 rounded'>{item.label}</NavigationMenuLink>)}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavbarMenuItems
