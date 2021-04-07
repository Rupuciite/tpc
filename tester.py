from selenium import webdriver
executable_path = r'chromedriver.exe'
import os

def file_writer(driver,file_name):
    titles = driver.find_elements_by_xpath("//meta")



    for title in titles:


            try:
                f = open(file_name, "a")


                f.write(title.get_attribute("content")+"\n")
                print(title.get_attribute("title"))
                f.close()
            except:
                print("error typing")

def wiki_composants():
    driver= webdriver.Chrome(executable_path)
    driver.get("https://www.mytek.tn/smartphone-oppo-reno-5-4g-silver.html")
    print("Wiki \n Composants:\n")
    file_name="wiki\composants.txt"
    file_writer(driver,file_name)
    driver.quit()
wiki_composants()
