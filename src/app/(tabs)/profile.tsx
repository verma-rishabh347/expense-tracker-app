import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Href, router } from 'expo-router'

type IconName = React.ComponentProps<typeof Ionicons>['name']

const summary = [
  {
    title: 'Total Income',
    amount: '₹55,000',
    icon: 'arrow-up' as IconName,
  },
  {
    title: 'Total Expense',
    amount: '₹30,000',
    icon: 'arrow-down' as IconName,
  },
  {
    title: 'Total Balance',
    amount: '₹25,000',
    icon: 'wallet-outline' as IconName,
  },
]
const settings = [
  
  {
    title: 'Expense Limits',
    subtitle: 'Set monthly spending limits',
    icon: 'bar-chart-outline',
        linktopage:"/(profiles)/aboutapp" as Href
  },
  {
    title: 'Notifications',
    subtitle: 'Manage your notification preferences',
    icon: 'notifications-outline',
        linktopage:"/(profiles)/aboutapp" as Href
  },
  {
    title: 'Privacy & Security',
    subtitle: 'Password, biometric, data control',
    icon: 'shield-checkmark-outline',
        linktopage:"/(profiles)/aboutapp" as Href
  },
  {
    title: 'Help & Support',
    subtitle: 'Get help and contact us',
    icon: 'help-circle-outline',
        linktopage:"/(profiles)/aboutapp" as Href
  },
  {
    title: 'Terms & Conditions',
    subtitle: 'Read our terms and policies',
    icon: 'document-text-outline',
        linktopage:"/(profiles)/aboutapp" as Href
  },
  {
    title: 'About App',
    subtitle: 'Version 1.0.0',
    icon: 'information-circle-outline',
    linktopage:"/(profiles)/aboutapp" as Href
  },
]

export default function profile() {
  return (
    <View className='bg-black h-full'>
        <SafeAreaView>
            <ScrollView>


                 {/* Header */}
              <View className="mt-4">
                
      
                <Text className="text-white text-4xl font-bold mt-1">
                  Profile
                </Text>
      
                <Text className="text-gray-400 text-base mt-2">
                  Manage your account and preferences
                </Text>
              </View>

              <Pressable className="h-44 w-full rounded-3xl border border-gray-800 bg-[#0b1012] px-7 flex-row items-center">

      {/* Profile Image */}

      <View className="relative">

        <View className="h-32 w-32 rounded-full overflow-hidden bg-gray-700">

          {/* Yahan apni image lagana */}

          {/* <Image source={require('../assets/profile.jpg')} className="h-full w-full" /> */}

        </View>

        {/* Camera Button */}

        <View className="absolute bottom-0 right-0 h-12 w-12 rounded-full bg-green-400 items-center justify-center">

          <Ionicons

            name="camera-outline"

            size={24}

            color="black"

          />

        </View>

      </View>

      {/* User Details */}

      <View className="flex-1 ml-7">

        <Text className="text-white text-3xl font-bold">

          Rishabh Verma

        </Text>

        <Text className="text-gray-400 text-lg mt-1">

          rishabh.verma@gmail.com

        </Text>

      </View>

      {/* Arrow */}

      <Ionicons

        name="chevron-forward"

        size={30}

        color="#9ca3af"

      />

    </Pressable>



              <View className="border border-green-900 rounded-3xl bg-[#06130e] px-5 py-6">

  <View className="flex-row">

    {summary.map((item) => (
  <View key={item.title}>
    <Ionicons
  name={item.icon}
  size={30}
  color="white"
/>

    <Text className="text-gray-400 text-lg mt-3">
      {item.title}
    </Text>

    <Text className="text-white text-3xl font-bold">
      {item.amount}
    </Text>
  </View>
))}

  </View>

</View>



{settings.map((item, index) => (
  <Pressable onPress={()=>router.push(item.linktopage)} key={item.title}>

    <View className="flex-row items-center px-5 py-4">

      <View className="h-16 w-16 rounded-2xl bg-[#15191b] items-center justify-center">
        <Ionicons
          name={item.icon}
          size={30}
          color="white"
        />
      </View>

      <View className="flex-1 ml-6">
        <Text className="text-white text-xl">
          {item.title}
        </Text>

        <Text className="text-gray-400 text-base mt-1">
          {item.subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={28}
        color="#9ca3af"
      />

    </View>

    {index !== settings.length - 1 && (
      <View className="h-[1px] bg-gray-800 ml-24" />
    )}

  </Pressable>
))}




<Pressable
  className="h-20 rounded-2xl border border-gray-800 flex-row items-center justify-center mt-5"
  onPress={() => router.replace("/(auth)/signin")}
>
  <Ionicons
    name="log-out-outline"
    size={32}
    color="#f87171"
  />

  <Text className="text-red-400 text-xl font-medium ml-5">
    Log Out
  </Text>
</Pressable>





            </ScrollView>


      
     
                </SafeAreaView>
    </View>
  )
}