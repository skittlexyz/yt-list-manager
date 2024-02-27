import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Pencil, Trash2 } from 'lucide-react'
import { getThumbnail } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface VideoProps {
    title: string
    url: string
    badges: string[]
}

function Video({ title, url, badges }: VideoProps) {
    let totalLength = 0;
    for (const badge of badges) {
        totalLength += badge.length
    }
    while (totalLength > 30 && badges.length > 0) {
        const removedBadge = badges.pop()
        if (removedBadge) totalLength -= removedBadge.length
    }

    return (
        <Card className='relative'>
            <CardHeader>
                <CardTitle className='mb-1'>{title}</CardTitle>
                <CardDescription className='flex gap-1'>
                    {badges.map((badge, index) => (
                        <Badge key={index}><b>{badge}</b></Badge>
                    ))}
                </CardDescription>
            </CardHeader>
            <CardContent className='-mt-3'>
                <img className='rounded-md h-[20vh] aspect-video' src={`${getThumbnail(url)}`} alt="" />
            </CardContent>
            <CardFooter className='absolute bottom-0 right-0 mb-2 mr-2'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {/* make EDIT open videoInfoWindow with edit informations */}
                            <Button className='mr-2' variant="outline" size="icon">
                                <Pencil className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Editar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <AlertDialog>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <AlertDialogTrigger asChild>
                                    {/* make DELETE button work */}
                                    <Button variant="destructive" size="icon">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Excluír</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Essa ação não pode ser desfeita. Excluír o vídeo irá apagar seu registro de nossos servidores.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction className={buttonVariants({ variant: "destructive" })}>Excluír</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                
            </CardFooter>
        </Card>
    )
}

export default Video;
