from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import products.models as m
from datetime import date
import time
def test():
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
    driver = webdriver.Chrome('chromedriver.exe', chrome_options=options)
    driver.get("https://tunisie-medicale.com/index.php/docteur/index/20")
    try:
        main = driver.find_elements_by_xpath('//div[@class="team_widget"]')


            img=''
        for i in main:
            try:
                name = i.find_element_by_xpath('.//img')
                specialite = i.find_element_by_xpath('.//h3')
                location =i.find_element_by_xpath('.//p/a')
                print(name.get_attribute('alt'),specialite.text,location.get_attribute('href'))
            except:
               print('error pricing')


        driver.quit()
    except:
        print('error accured')
        driver.quit()
