from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
import os

executable_path =r'C:\Users\ASUS\Desktop\pp\tpc\Console\chromedriver.exe'


try:
    os.makedirs('wiki')
except OSError as e:
    print("folder exists")
def Loader(driver):
    while True:
        try:
            print("waiting for load")
            myElem = WebDriverWait(driver, 1).until_not(EC.presence_of_element_located((By.XPATH,"//img[@src='https://www.wiki.tn/img/loader.gif']")))
        except TimeoutException:
            print("loaded")
            break
    time.sleep(2)
def clicker(driver,c):
    while True:
        try:
            link= driver.find_element_by_link_text(str(c))
            link.click()
        except:
            print("couldn't click")
        else:
            break
def file_writer(driver,file_name):
    main = driver.find_element_by_id("product_list")
    titles = main.find_elements_by_xpath("//a[@class='product-name']")
    prices= main.find_elements_by_xpath("//span[@itemprop='price']")
    i=0
    j=0

    for title in titles:


            i=i+1
            try:
                f = open(file_name, "a")


                f.write(title.get_attribute("title")+"\n"+title.get_attribute("href")+"\n")
                print(title.get_attribute("title"))
                f.close()
            except:
                print("error typing")
            for price in prices:
                j=j+1
                if (i==j):
                    try:
                        f = open(file_name, "a")
                        f.write(price.text+"\n")

                        f.close()
                    except:
                        print("error typing")
                    j=0
                    break
def wiki_composants():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/telephonie-tablette-15.html")
    print("Wiki \n Composants:\n")
    file_name="wiki\composants.txt"
    b=35

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_ordinateur_pc_portable():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/ordinateur-pc-portable-13.html")
    print( "pc portable:\n")
    file_name="wiki\pc_portable.txt"
    b=71
    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_accessoires():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/accessoires-peripheriques-68.html")
    print(" accessoires:\n")
    file_name=r"wiki\accessoires.txt"
    b=66

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_stockages():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/stockage-composants-14.html")
    print("stoackes:\n")
    file_name="wiki\stockages.txt"
    b=46

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_impression():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/impression-17.html")
    print("Impression:\n")
    file_name="wiki\impression.txt"
    b=21

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_image_son():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/electromenager-image-et-son-16.html")
    print("image_son:\n")
    file_name="wiki\image_son.txt"
    b=37

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_electromenager():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/electromenager-cuisine--504.html")
    print("electromenager:\n")
    file_name="wiki\electromenager.txt"
    b=81

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_reseau():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/-s%C3%A9curit%C3%A9-r%C3%A9seaux--electricit%C3%A9-%C3%A9nergie-solaire-19.html")
    print("reseau:\n")
    file_name="wiki\reseau.txt"
    b=13

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_solution_entreprise():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/solution-entreprise-18.html")
    print("solution_entreprise:\n")
    file_name="wiki\solution_entreprise.txt"
    b=22

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()
def wiki_gaming():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.wiki.tn/c/gaming-81.html")
    print("gaming:\n")
    file_name="wiki\gaming.txt"
    b=13

    for c in range(2,b):
            print("page:" ,c-1)
            Loader(driver)
            file_writer(driver,file_name)
            if (c<b-1):
                clicker(driver,str(c))
    driver.quit()

def update():
    wiki_composants()
    wiki_ordinateur_pc_portable()
    wiki_accessoires()
    wiki_stockages()
    wiki_impression()
    wiki_image_son()
    wiki_electromenager()
    wiki_reseau()
    wiki_solution_entreprise()
    wiki_gaming()
