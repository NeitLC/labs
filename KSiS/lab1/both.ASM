.model small
.stack 100h
.DATA
        Surname     DB   'Gribovskij',13,10,'$' 
        Empty       DB   13,10,'$' 

.CODE
        ;first task
        mov     ax, @Data 
        mov     ds, ax

        mov     dx, OFFSET Surname            
        mov     bx, 1
        mov     cx, 6
        mov     ah, 40h   
        int     21h       

        mov     dx, OFFSET Empty            
        mov     ah, 9h
        int     21h       

        ;second task
        mov     dx, OFFSET Surname            
        mov     cx, 5
NextLoop:
        mov     ah, 9h           ; функция DOS вывода строки
        int     21h              ; вызов DOS
        loop    NextLoop

        mov     ax, 4C00h 
        int     21h        
END
