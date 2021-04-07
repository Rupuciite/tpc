from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
executable_path =r'C:\Users\ASUS\Desktop\pp\tpc\Console\chromedriver.exe'
import os
import logging,traceback
logger = logging.getLogger('django')
try:
    if not os.path.exists('Mytek'):
        os.makedirs('Mytek')
except OSError as e:
    if e.errno != errno.EEXIST:
        raise
def Loader(driver):
    while True:
        try:
            print("waiting for load")
            myElem = WebDriverWait(driver, 1).until_not(EC.presence_of_element_located((By.XPATH,"//img[@src='https://web-assets-mk.s3.amazonaws.com/img/loader.gif']")))
        except TimeoutException:
            print("loaded")
            break
    time.sleep(2)
def Mytek_Informatique():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/3-informatique")
    print("Mytek Informatique\n Informatique e:\n")
    for c in range(2,177):
            Loader(driver)
            print("page:" ,c-1)

            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open("Mytek\informatique.txt", "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))

                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<176):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break

    driver.quit()
def Mytek_telephonie():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/104-telephonie-tunisie")
    print(" Telephonie:\n")
    for c in range(2,107):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open("Mytek\Telephonie.txt", "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))

                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<106):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_electromenager():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/4-electromenager-tunisie")
    print("electromenagere:\n")
    b=115
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)

            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open("Mytek\Electromenager.txt", "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_image_son():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/39-image-son")
    print("image_son:\n")
    b=80
    file_folder="Mytek\image_son.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_Gaming():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/5-gaming")
    print("Gaming:\n")
    b=46
    file_folder="Mytek\Gaming.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_Reseau_securite():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/57-reseaux-securite-tunisie")
    print("Reseau_securite:\n")
    b=48
    file_folder="Mytek\Reseau_securite.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_sport_losirs():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/515-sports-loisirs#/")
    print("sport_losirs:\n")
    b=56
    file_folder="Mytek\sport_losirs.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_bureautique():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/273-bureautique")
    print("bureautique:\n")
    b=106
    file_folder=r"Mytek\bureautique.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_sante():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/501-mode-beaute-sante")
    print("sante:\n")
    b=87
    file_folder="Mytek\sante.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def Mytek_bricolage():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://old-version.mytek.tn/554-bricolage-outillage")
    print("bricolage:\n")
    b=48
    file_folder=r"Mytek\bricolage.txt"
    for c in range(2,b):
            Loader(driver)
            print("page:" ,c-1)
            main = driver.find_element_by_id("center_column")
            titles = main.find_elements_by_class_name("product-name")
            prices= main.find_elements_by_xpath("//span[@itemprop='price']")
            i=0
            j=0

            for title in titles:
                    i=i+1
                    try:
                        f = open(file_folder, "a")
                        f.write(title.text+"\n"+title.get_attribute("href")+"\n")
                        print(title.get_attribute("title"))
                        logger.critical(title.get_attribute("title"))
                        f.close()
                    except:
                        print("error typing")

                    for price in prices:
                        j=j+1
                        if (i==j):
                            try:
                                f = open("Mytek\informatique.txt", "a")
                                f.write(price.text+"\n")
                            except:
                                print("error typing")

                            f.close()
                            j=0
                            break
            if (c<b-1):
                while True:
                    try:
                        link= driver.find_element_by_link_text(str(c))
                        link.click()
                    except:
                        print("couldn't click")
                    else:
                        break
    driver.quit()
def update():
    Mytek_Informatique()
    Mytek_telephonie()
    Mytek_electromenager()
    Mytek_image_son()
    Mytek_Gaming()
    Mytek_Reseau_securite()
    Mytek_sport_losirs()
    Mytek_bureautique()
    Mytek_sante()
    Mytek_bricolage()
