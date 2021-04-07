from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import products.models as m
from datetime import date
import time
def Doc():
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
    options = webdriver.ChromeOptions()
    options.headless = True
    options.add_argument(f'user-agent={user_agent}')
    options.add_argument("--window-size=1366,768")
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--allow-running-insecure-content')
    options.add_argument("--disable-extensions")
    options.add_argument("--proxy-server='direct://'")
    options.add_argument("--proxy-bypass-list=*")
    options.add_argument("--start-maximized")
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--no-sandbox')

    for i in range(20, 3000,20):
        url="https://tunisie-medicale.com/index.php/docteur/index/"+str(i)
        print(url)
        driver = webdriver.Chrome('chromedriver.exe', chrome_options=options)
        driver.get(url)
        try:
            main = driver.find_elements_by_xpath('//div[@class="team_widget"]')
            for i in main:
                try:
                    name = i.find_element_by_xpath('.//img')
                    specialite = i.find_element_by_xpath('.//h3')
                    location =i.find_element_by_xpath('.//p/a')
                    Descrption =i.find_element_by_xpath('.//p')

                    print(name.get_attribute('alt'),specialite.text,location.get_attribute('href'))
                    spec,created=m.Speciality.objects.get_or_create(Name=specialite.text)
                    attr=m.Med.objects.get_or_create(name=name.get_attribute('alt'),speciality=spec,city=location.get_attribute('href'),description=Descrption.text)
                except:
                   print('error pricing')


            driver.quit()
        except:
            print('error accured')
            driver.quit()
def Dentist():
    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
    options = webdriver.ChromeOptions()
    options.headless = True
    options.add_argument(f'user-agent={user_agent}')
    options.add_argument("--window-size=1366,768")
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--allow-running-insecure-content')
    options.add_argument("--disable-extensions")
    options.add_argument("--proxy-server='direct://'")
    options.add_argument("--proxy-bypass-list=*")
    options.add_argument("--start-maximized")
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--no-sandbox')

    for i in range(20, 3000,20):
        url="https://tunisie-medicale.com/index.php/dentiste/index/"+str(i)
        print(url)
        driver = webdriver.Chrome('chromedriver.exe', chrome_options=options)
        driver.get(url)
        try:
            main = driver.find_elements_by_xpath('//div[@class="team_widget"]')
            for i in main:
                try:
                    name = i.find_element_by_xpath('.//img')
                    location =i.find_element_by_xpath('.//p/a')
                    Descrption =i.find_element_by_xpath('.//p')
                    print(name.get_attribute('alt'),location.get_attribute('href'),Descrption.text)
                    spec,created=m.Speciality.objects.get_or_create(Name='Dentist')
                    attr=m.Med.objects.get_or_create(name=name.get_attribute('alt'),speciality=spec,city=location.get_attribute('href'),description=Descrption.text)
                except:
                   print('error accured')


            driver.quit()
        except:
            print('error accured')
            driver.quit()

Dentist()
