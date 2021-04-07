from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import products.models as m
import datetime
import time
start_time = time.time()

with open('mega.txt') as f:
    mylist = [line.rstrip('\n') for line in f]
file1=mylist[:len(mylist)//2]
file2=mylist[len(mylist)//2:]

def tester(t):
    counter=0
    for i in t:
        counter+=1
        print(i)
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
        options.add_argument("--log-level=3")
        driver = webdriver.Chrome('chromedriver.exe', chrome_options=options)
        driver.get(i)
        try:
            name= driver.find_element_by_xpath('//*[@id="single-product"]/div/div[2]/div/div[1]/h1')
            print(name.text)
            mark= driver.find_element_by_xpath('//*[@id="infoplusprodduit"]/li[1]/a/span')
            ref = driver.find_element_by_xpath('//*[@id="infoplusprodduit"]/li[2]/span')
            category = driver.find_element_by_xpath('//*[@id="infoplusprodduit"]/li[3]/a[3]/span')
            main = driver.find_elements_by_xpath('//li[@class="productOffers-listItem row row-24 row-24-mobile"]')
            category,created=m.Categorie.objects.get_or_create(Name=category.text)
            type,created=m.Type_Product.objects.get_or_create(Name=mark.text)
            item,created= m.Product.objects.get_or_create(type=type,ref=ref.text,categorie=category)
            item.price.clear()
            try:
             img= driver.find_element_by_xpath('//*[@id="carousel-with-preview"]/div[1]/div[1]/amp-img/img')
             item.image_url=img.get_attribute("src")
            except:
                print('no image')
            print(created)
            for i in main:
                try:
                    name = i.find_element_by_xpath('.//span[@class="productOffers-listItemTitleInner"]')
                    price = i.find_element_by_xpath('.//div[@class="productOffers-listItemOffer small-14 medium-14 large-6 xlarge-4 columns"]/a')
                    item_owner,created=m.Resellers.objects.get_or_create(name_fr=price.get_attribute("data-tip").replace(' ','').split('->')[0])

                    price,created = item.price.update_or_create(item_name=name.text,item_owner=item_owner,link=price.get_attribute("data-tip").replace(' ','').split('->')[1],
                    defaults={'price':price.text.replace('DT',''),'date':datetime.datetime.now()},)

                except:
                   print('error pricing')
            item.name_fr=name.text
            item.save()
            driver.quit()
            print("link---",counter,"---seconds ---" , (time.time() - start_time))
        except:
            print('error accured')
import threading

t = threading.Thread(target=tester, args=(file1,), kwargs={})
t.setDaemon(True)
t.start()
t = threading.Thread(target=tester, args=(file2,), kwargs={})
t.setDaemon(True)
t.start()
