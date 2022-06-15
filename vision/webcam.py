import cv2
import keyboard
vc = cv2.VideoCapture(0)


if vc.isOpened(): # try to get the first frame
    is_capturing, frame = vc.read()
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)    # makes the blues image look real colored
  #  webcam_preview = plt.imshow(frame)    
else:
    is_capturing = False
i = 0
while is_capturing:
        is_capturing, frame = vc.read()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)    # makes the blues image look real colored
#         webcam_preview.set_data(frame)
#         plt.draw()
       # plt.imshow(frame)
        i += 1
        if keyboard.read_key() == "a":
            cv2.imwrite(f"true/{i}.jpg", frame)
            print("true!", i)
        else:
            cv2.imwrite(f"false/{i}.jpg", frame)
            print("false!", i)
      #  try:    # Avoids a NotImplementedError caused by `plt.pause`
      #      plt.pause(0.1)
      #  except Exception:
      #      pass
