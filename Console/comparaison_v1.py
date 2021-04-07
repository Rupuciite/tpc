import os
import products.models as m
def website_products(Name):
    i=0
    List_Wiki= []
    arr = os.listdir(Name)
    for y in arr:
        f = open(Name+"\\"+y, "r")
        for x in f:
          i=i+1
          if i==1:
              name=x
          if i==2:
              link=x
          if i==3:
             List_Wiki.append({
              "brand": name,
              "link": link,
              "price": x
              })
             i=0
    f.close()
    return List_Wiki
def brand_translation_to_english(to_translate):
    import time
    time.sleep(1)
    from google_trans_new import google_translator
    translator = google_translator()
    translate_text = translator.translate(to_translate,lang_src='fr',lang_tgt='en',pronounce=True)
    return translate_text
def brand_products(brand_name,List):
    Local_List=[]
    for x in List:
        if brand_name=="empty":
            Local_List.append(x["brand"])
        else:
            if brand_name.lower() in x["brand"].lower():
                    fr=x["brand"]
                    x["price"]=x["price"].replace("TND\n","")
                    x["price"]=x["price"].replace("DT","")
                    x["price"]=x["price"].replace(",",".")
                    x["price"]=x["price"].replace(" ","")
                    if x["price"].isalpha():
                        continue
                    if (m.Product.objects.filter(name_fr=fr).count()==0 ):
                        x["brand"]=brand_translation_to_english(x["brand"])

                        if (m.Product.objects.filter(name=x["brand"][0]).count()==0):
                            try:
                             m.Product.objects.get_or_create(name=x["brand"][0],name_fr=fr, price=float(x["price"]))
                             print(x["brand"][0],x["price"])
                            except:
                                print('fail',x["price"])

                        else:
                            try:
                                item=m.Product.objects.filter(name_fr=fr)[0]
                                x["price"]=x["price"].replace("DT\n","")
                                x["price"]=x["price"].replace(",",".")
                                x["price"]=x["price"].replace(" ","")
                                item.price=x["price"]
                                item.save()
                                Local_List.append(x["brand"])
                                print('bro rani mawjoud bel en')
                            except:
                                print('fail',x["price"])
                    else:
                        try:
                            item=m.Product.objects.filter(name_fr=fr)[0]
                            x["price"]=x["price"].replace("DT\n","")
                            x["price"]=x["price"].replace(",",".")
                            x["price"]=x["price"].replace(" ","")
                            item.price=x["price"]
                            item.save()
                            Local_List.append(x["brand"])
                            print('bro rani mawjoud bel fr')
                        except:
                            print('fail',x["price"])

    return Local_List
def brand_products_List(brand_name,List):
    Local_List=[]
    for x in List:
        if brand_name=="empty":
            Local_List.append(x)
        else:
            if brand_name.lower() in x.lower():
                print(x)
                Local_List.append(x)
    return Local_List
def sentences_sequences(List):
    from tensorflow.keras.preprocessing.text import Tokenizer
    sentences= brand_products("\n",List)
    sentences= brand_products_List("\n",sentences)
    sentences= deuplicate_remover(sentences)
    tokenizer = Tokenizer(num_words = 1000)
    tokenizer.fit_on_texts(sentences)
    word_index = tokenizer.word_index
    sequences = tokenizer.texts_to_sequences(sentences)
    return word_index,sequences
def deuplicate_remover(List):
    for i in range(len(List)):
        try:
            if (i+1<=len(List)):
                if (List[i]==List[i+1]):

                    List.remove(List[i])
        except:
            print("wops")
    return List
List_Wiki=website_products("wiki")
word_index,sequences=sentences_sequences(List_Wiki)
sequences= sorted(sequences)
sequences=deuplicate_remover(sequences)
occurance=[]
values=[]
for x in sequences:
    for y in x:
        if y in values:
            occurance[values.index(y)]=occurance[values.index(y)]+1
        else:
            values.append(y)
            occurance.append(1)
l=0
for x in values:
    if occurance[values.index(x)]==1:
        print(list(word_index.keys())[list(word_index.values()).index(x)],": ",occurance[values.index(x)])
        l=l+1
print(l)
