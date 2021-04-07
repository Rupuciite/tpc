from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
executable_path =r'C:\Users\ASUS\Desktop\pp\tpc\Console\chromedriver.exe'
import os
try:
    os.makedirs('scoop')
except OSError as e:
    print("folder exists")
def Loader(driver):
    while True:
        try:
            print("waiting for load")
            myElem = WebDriverWait(driver, 1).until_not(EC.presence_of_element_located((By.XPATH,"//img[@src='https://www.scoop.com.tn/img/loader.gif']")))
        except TimeoutException:
            print("loaded")
            break
    time.sleep(2)
def scoop_ordinateur_portable():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/320-ordinateurs-tablettes#")
    print("Scoop Informatique\n pc portable:\n")
    for c in range(2,10):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:
                try:
                    if (title.get_attribute("title")!=ch):
                            i=i+1

                            f = open("scoop\scoop_ordinateur_tablette.txt", "a")

                            ch=title.get_attribute("title");
                            f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                            print(title.get_attribute("title"))
                            f.close()
                except:
                        print("error typing")
                for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\scoop_ordinateur_tablette.txt", "a")
                                f.write(price.text+"\n")

                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break
            if (c<10):
                m=0;
                while m<5:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                        time.sleep(5)
                        m=m+1
                    else:
                        break
    driver.quit()
def scoop_pc_bureau():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/291-pc-de-bureau")
    print("pc bureau \n")

    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\scoop_ordinateur_bureau.txt", "a")
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\scoop_ordinateur_bureau.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_pc_tout_en_un():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/2081-pc-tout-en-un")
    print("tous en un\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\scoop_ordinateur_tous_en_un.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\scoop_ordinateur_tous_en_un.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_disk():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/299-serveurs-et-stockage")
    print("disk:\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\disk.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\disk.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_camera_projecteur():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/2069-photo-videoprojecteurs")
    print("camera & projecteur:\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\camera_projecteur.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1

                        if (i==j):
                            try:
                                f = open("scoop\camera_projecteur.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_ecran():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/292-ecrans#")
    print(" ecran:\n")
    for c in range(2,4):
        print("page:" ,c-1)
        Loader(driver)

        main = driver.find_element_by_id("center_column")
        titles = main.find_elements_by_xpath("//a[@itemprop='url']")
        prices= main.find_elements_by_xpath("//span[@itemprop='price']")
        i=0
        j=0
        ch=""
        for title in titles:

            if (title.get_attribute("title")!=ch):
                i=i+1
                try:
                    f = open("scoop\scoop_ordinateur_ecran.txt", "a")
                    print(title.get_attribute("title"))
                    ch=title.get_attribute("title");
                    f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                    f.close()
                except:
                    print("error typing")
                for price in prices:
                    j=j+1
                    if (i==j):
                        try:
                            f = open("scoop\scoop_ordinateur_ecran.txt", "a")
                            f.write(price.text+"\n")
                            f.close()
                        except:
                            print("error typing")
                        j=0
                        break
        if (c<3):
            while True:
                try:
                    link= driver.find_element_by_link_text(str(c))
                    link.click()
                except:
                    print("couldn't click")
                else:
                    break
    driver.quit()
def scoop_imprimante():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/294-imprimantes")
    print(" imprimante:\n")
    for c in range(2,4):
            print("page:" ,c-1)
            Loader(driver)

            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:
                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\imprimante.txt", "a")
                        ch=title.get_attribute("title");
                        print(title.get_attribute("title"))
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\imprimante.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break
            if (c<3):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def scoop_photocopeur_monochrome():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/221-photocopieur-monochrome")
    print("photocopieur_monochrome:\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)

            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\photocopieur_monochrome.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\photocopieur_monochrome.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scanner_consommable():
        driver= webdriver.Chrome(executable_path)
        driver.get("https://www.scoop.com.tn/308-consommables")
        print(" scanner_consommable:\n")
        for c in range(2,10):
                print("page:" ,c-1)
                Loader(driver)
                if (c<9):
                    link= driver.find_element_by_link_text(str(c))
                main = driver.find_element_by_id("center_column")
                titles = main.find_elements_by_xpath("//a[@itemprop='url']")
                prices= main.find_elements_by_xpath("//span[@itemprop='price']")
                i=0
                j=0
                ch=""
                for title in titles:

                    if (title.get_attribute("title")!=ch):
                        i=i+1
                        try:
                            f = open("scoop\scanner_consommable.txt", "a")
                            print(title.get_attribute("title"))
                            ch=title.get_attribute("title");
                            f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                            f.close()
                        except:
                            print("error typing")
                        for price in prices:
                            j=j+1
                            if (i==j):
                                try:
                                    f = open("scoop\scanner_consommable.txt", "a")

                                    f.write(price.text+"\n")
                                    f.close()
                                except:
                                    print("error typing")
                                j=0
                                break
                if (c<9):
                 while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
        driver.quit()
def scoop_reseau():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/2064-reseau-connectique")
    print(" reseau:\n")
    for c in range(2,4):
            print("page:" ,c-1)
            Loader(driver)
            if (c<3):
                link= driver.find_element_by_link_text(str(c))
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open(r"scoop\reseau.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open(r"scoop\reseau.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break
            if (c<3):
                while True:
                 try:
                    link= driver.find_element_by_link_text(str(c))
                    link.click()
                 except:
                    print("couldn't click")
                 else:
                    break
    driver.quit()
def scoop_logiciels():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/142-logiciels")
    print(" Logiciels:\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\Logiciels.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\Logiciels.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_accessoires():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/293-accessoires-informatique")
    print(" accessoires:\n")
    for c in range(2,15):
            print("page:" ,c-1)
            Loader(driver)
            if (c<14):
                link= driver.find_element_by_link_text(str(c))
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open(r"scoop\accessoires.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open(r"scoop\accessoires.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break
            if (c<14):
                try:
                    link.click()
                except:
                    time.sleep(2)
                    link.click()


            time.sleep(4)
    driver.quit()
def scoop_consoles():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/2068-consoles-et-jeux")
    print(" consoles:\n")
    for c in range(2,3):
            print("page:" ,c-1)
            Loader(driver)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_xpath("//a[@itemprop='url']")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0
            ch=""
            for title in titles:

                if (title.get_attribute("title")!=ch):
                    i=i+1
                    try:
                        f = open("scoop\consoles.txt", "a")
                        print(title.get_attribute("title"))
                        ch=title.get_attribute("title");
                        f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\consoles.txt", "a")
                                f.write(price.text+"\n")
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break

    driver.quit()
def scoop_config():
    print(" config:\n")
    for c in range(2,11):

            driver= webdriver.Chrome(executable_path)
            driver.get("https://www.scoop.com.tn/el-configurateur")
            try:
                    link= driver.find_element_by_id(str(c))
                    link.click()
            except:
                print("failed")
            while True:
                try:

                    myElem = WebDriverWait(driver, 1).until(EC.presence_of_element_located((By.XPATH,"//div[@class='col-sm-12 add_part']")))
                except TimeoutException:
                    print("waiting for load")
                else:
                    break


            titles = driver.find_elements_by_xpath("//span[@class='tabprod titreconf']")
            prices= driver.find_elements_by_xpath("//span[@class='tabprod prix']")
            i=0
            j=0
            ch=""

            for title in titles:
                print (title.text)

                if (title.text!=ch):
                    i=i+1


                    ch=title.text
                    try:
                        f = open("scoop\config.txt", "a")
                        print(title.get_attribute("title"))
                        f.write(title.text+"\n")
                        f.close()
                    except:
                        print("error typing")
                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("scoop\config.txt", "a")
                                f.write(price.text+"\n")
                                print(title.get_attribute("title"))
                                f.close()
                            except:
                                print("error typing")
                            j=0
                            break


            driver.quit()
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.scoop.com.tn/el-configurateur")
    try:
            link= driver.find_element_by_id(str(280))
            link.click()
    except:
        print("failed")
    while True:
        try:

            myElem = WebDriverWait(driver, 1).until(EC.presence_of_element_located((By.XPATH,"//div[@class='col-sm-12 add_part']")))
        except TimeoutException:
            print("waiting for load")
        else:
            break

    titles = driver.find_elements_by_xpath("//span[@class='tabprod titreconf']")
    prices= driver.find_elements_by_xpath("//span[@class='tabprod prix']")
    i=0
    j=0
    ch=""

    for title in titles:
        print (title.text)

        if (title.text!=ch):
            i=i+1
            try:
                f = open("scoop\config.txt", "a")

                ch=title.text;

                f.write(title.text+"\n")
                f.close()
            except:
                print("error writing")
            for price in prices:
                j=j+1
                if (i==j):
                    try:
                        f = open("scoop\config.txt", "a")
                        f.write(price.text+"\n")
                        f.close()
                    except:
                        print ("error writing")
                    j=0
                    break


    driver.quit()
def update():
    scoop_ordinateur_portable()
    scoop_pc_bureau()
    scoop_pc_tout_en_un()
    scoop_disk()
    scoop_camera_projecteur()
    scoop_ecran()
    scoop_imprimante()
    scoop_photocopeur_monochrome()
    scanner_consommable()
    scoop_reseau()
    scoop_logiciels()
    scoop_accessoires()
    scoop_consoles()
    scoop_config()
