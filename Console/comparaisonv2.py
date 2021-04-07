import os
import products.models as m


def website_products(Name):
    i = 0
    List_Wiki = []
    arr = os.listdir(Name)
    for y in arr:
        f = open(Name + "\\" + y, "r")
        for x in f:
            i = i + 1
            if i == 1:
                name = x
            if i == 2:
                link = x
            if i == 3:
                List_Wiki.append({
                    "brand": name,
                    "link": link,
                    "price": x
                })
                i = 0
    f.close()
    return List_Wiki


def brand_translation_to_english(to_translate):
    import time
    time.sleep(1)
    try:
        from google_trans_new import google_translator
        translator = google_translator()
        translate_text = translator.translate(
            to_translate, lang_src='fr', lang_tgt='en', pronounce=True)
        return translate_text
    except:
        return to_translate


def get_matches(query, choices):
    from fuzzywuzzy import process
    from fuzzywuzzy import fuzz
    local = list(process.extractOne(query, choices))
    for i in choices:
        local1 = fuzz.WRatio(query, i)
        if (local1 > local[1]):
            print(local1)
            local[1] = local1
            local[0] = i

    return local


def get_choices_en(object):
    r = []
    for i in object:
        i.name = i.name.replace("'\n", "")
        r.append(i.name)
    return r


def get_choices_fr(object):
    r = []
    for i in object:
        i.name_fr = i.name_fr.replace("'\n", "")
        r.append(i.name_fr)
    return r


def brand_products(brand_name, List):
    Local_List = []
    for x in List:
        if brand_name == "empty":
            Local_List.append(x["brand"])
        else:
            if brand_name.lower() in x["brand"].lower():
                fr = x["brand"]
                x["price"] = x["price"].replace("TND\n", "")
                x["price"] = x["price"].replace("DT", "")
                x["price"] = x["price"].replace(",", ".")
                x["price"] = x["price"].replace(" ", "")
                x["link"] = x["link"].replace("\n", "")

                print(x["link"])
                if x["price"].isalpha():
                    continue
                print(fr)
                verifier = get_matches(
                    fr, get_choices_fr(m.Product.objects.all()))
                if (verifier[1] > 90):
                    print('fr', verifier[1])
                    if (m.Product.objects.filter(name_fr=verifier[0]).count() > 0):
                        try:
                            item = m.Product.objects.filter(
                                name_fr=verifier[0])[0]
                            x["price"] = x["price"].replace("DT", "")
                            x["price"] = x["price"].replace(",", ".")
                            x["price"] = x["price"].replace(" ", "", 10)
                            x["price"] = x["price"].replace("TTC", "")
                            x["price"] = x["price"].replace("Prix", "")
                            x["price"] = x["price"].replace("estimatif", "")
                            x["price"] = x["price"].replace(":", "")
                            item.url=x["link"]
                            item.save()
                            reserller= m.Resellers.objects.filter(name_fr='Scoop')[0]
                            item.price.get_or_create(item_owner=reserller ,price=x["price"])
                            item.save()
                            Local_List.append(x["brand"])
                        except:
                            print('fail', x["price"])

                else:
                    x["brand"] = brand_translation_to_english(x["brand"])
                    verifier = get_matches(
                        x["brand"][0], get_choices_en(m.Product.objects.all()))
                    if (verifier[1] > 87):
                        print("en:", verifier[1])
                        try:
                            item = m.Product.objects.filter(
                                name=verifier[0])[0]
                            x["price"] = x["price"].replace("DT", "")
                            x["price"] = x["price"].replace(",", ".")
                            x["price"] = x["price"].replace(" ", "", 10)
                            x["price"] = x["price"].replace("TTC", "")
                            x["price"] = x["price"].replace(
                                "Prix estimatif :", "")
                            item.url=x["link"]
                            item.save()
                            reserller= m.Resellers.objects.filter(name_fr='Scoop')[0]
                            item.price.get_or_create(item_owner=reserller ,price=x["price"])
                            item.save()
                            Local_List.append(x["brand"])
                        except:
                            print('fail', x["price"])
                    else:
                        try:
                            m.Product.objects.create(
                                name=x["brand"][0], name_fr=fr, price=x["price"],url=x["link"])
                        except:
                            print('error')

    return Local_List







def get_row_image(url):
    from selenium import webdriver
    driver= webdriver.Chrome(r'chromedriver.exe')
    driver.get(url)
    try:
     image = driver.find_element_by_xpath("//meta[@property='og:image']")
     url = image.get_attribute("content")
     print(image.get_attribute("content"))
     driver.quit()
    except:
     print('rip')
     driver.quit()
     return ''
    return url
def get_row_image_scoop(url):
    from selenium import webdriver
    driver= webdriver.Chrome(r'chromedriver.exe')
    driver.get(url)
    try:
     image = driver.find_element_by_xpath("//img[@class='img-responsive']")
     url = image.get_attribute("src")
     print(image.get_attribute("src"))
     driver.quit()
    except:
     print('rip')
     driver.quit()
     return ''
    return url
def update_images():
    i=0
    for row in m.Product.objects.filter(price_Scoop=0):
        i=i+1

        print(row.image_url,i)
        if row.image_url=='' and row.url:
         try:
          row.image_url=get_row_image(row.url)
          row.save()
         except:
             print('rip')
def get_row_description(url,row):
    from selenium import webdriver
    driver= webdriver.Chrome(r'chromedriver.exe')
    driver.get(url)
    try:
     if row.price>0 or row.price_Scoop>0:
         image = driver.find_element_by_xpath("//meta[@property='og:description']")
         url = image.get_attribute("content")
         print(image.get_attribute("content"))
         driver.quit()
     else:
         driver= webdriver.Chrome(r'chromedriver.exe')
         driver.get(url)
         image = driver.find_element_by_xpath("//meta[@name='description']")
         url = image.get_attribute("content")
         print(image.get_attribute("content"))
         driver.quit()

    except:
            driver.quit()

            print('rip')
            driver.quit()
            return ''
    return url
def update_descriptions():
    i=0
    for row in m.Product.objects.all():
        i=i+1
        print(row.description,i)
        if (row.description==None or row.description=='' or 'wiki' in row.description) and row.url:
         try:
          row.description=get_row_description(row.url,row)
          row.save()
         except:
             print('rip')
List_Wiki=website_products("scoop")
brand_products("\n", List_Wiki)
