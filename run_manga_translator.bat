@echo off
chcp 65001 >nul
title Manga Web Translator - Launcher
echo ====================================================================
echo   Manga Web Translator Chrome Extension Launcher
echo ====================================================================
echo.
echo กำลังค้นหา Google Chrome ในระบบ...

set "CHROME_PATH="

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
) else if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%LocalAppData%\Google\Chrome\Application\chrome.exe"
)

if "%CHROME_PATH%"=="" (
    echo [ERROR] ไม่พบ Google Chrome ในเครื่องของคุณในตำแหน่งมาตรฐาน
    echo กรุณาเปิด Google Chrome ด้วยตัวเอง และไปที่ chrome://extensions เพื่อติดตั้งแบบ Unpacked
    echo.
    pause
    exit /b 1
)

echo พบ Google Chrome: "%CHROME_PATH%"
echo กำลังโหลด Extension จากโฟลเดอร์: "%~dp0สร้างแอพหรือโปรแกรมอะไรสักอย่างที่เอาไว้แปลบนหน้าเว็บนั้นๆเวลาอ่านมังงะ"
echo.
echo กำลังเปิด Google Chrome พร้อมโหลด Extension ให้อัตโนมัติ...
echo.

start "" "%CHROME_PATH%" --load-extension="%~dp0สร้างแอพหรือโปรแกรมอะไรสักอย่างที่เอาไว้แปลบนหน้าเว็บนั้นๆเวลาอ่านมังงะ" "http://localhost:3000" "https://tapas.io"

echo [สำเร็จ] เปิดใช้งาน Google Chrome เรียบร้อยแล้ว!
echo คุณสามารถใช้งานส่วนขยายได้ทันที (คลิกที่ไอคอนจิ๊กซอว์ / ส่วนขยาย บนแถบเครื่องมือของ Chrome)
echo.
pause