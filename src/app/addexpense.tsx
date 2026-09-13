import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

type IconName = React.ComponentProps<typeof Ionicons>['name']

const categories: {
  title: string
  icon: IconName
}[] = [
  {
    title: 'Food',
    icon: 'restaurant-outline',
  },
  {
    title: 'Shopping',
    icon: 'cart-outline',
  },
  {
    title: 'Transport',
    icon: 'car-outline',
  },
  {
    title: 'Bills',
    icon: 'document-text-outline',
  },
  {
    title: 'Entertainment',
    icon: 'game-controller-outline',
  },
  {
    title: 'Health',
    icon: 'heart-outline',
  },
  {
    title: 'Education',
    icon: 'school-outline',
  },
  {
    title: 'Other',
    icon: 'ellipsis-horizontal',
  },
]

export default function AddExpense() {
  const [selectedCategory, setSelectedCategory] = useState('Food')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >

          {/* Header */}
          <View className="flex-row items-center justify-between px-5">

            <Pressable onPress={() => router.back()}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
              />
            </Pressable>

            <Text className="text-white text-xl font-bold">
              Add Expense
            </Text>

            <View className="h-12 w-12 rounded-2xl border border-gray-800 items-center justify-center">
              <Ionicons
                name="document-text-outline"
                size={25}
                color="white"
              />
            </View>

          </View>

          {/* Main Icon */}
          <View className="items-center mt-5">

            <View className="h-24 w-24 rounded-full bg-red-500/20 border border-red-500 items-center justify-center">
              <Ionicons
                name="restaurant"
                size={42}
                color="white"
              />
            </View>

            <Text className="text-white text-3xl font-bold mt-4">
              Add Expense
            </Text>

            <Text className="text-gray-400 text-base mt-1">
              Track where your money goes
            </Text>

          </View>

          {/* Amount */}
          <View className="mx-5 h-24 rounded-2xl border border-gray-800 bg-gray-900/30 mt-6 px-5 justify-center">

            <Text className="text-gray-400 text-sm">
              Amount
            </Text>

            <View className="flex-row items-center mt-1">

              <Text className="text-white text-3xl">
                ₹
              </Text>

              <TextInput
                value={amount}
                onChangeText={setAmount}
                placeholder="0.00"
                placeholderTextColor="#6b7280"
                keyboardType="decimal-pad"
                className="flex-1 text-white text-3xl ml-4"
              />

            </View>

          </View>

          {/* Description */}
          <View className="mx-5 h-24 rounded-2xl border border-gray-800 bg-gray-900/30 mt-4 px-5 justify-center">

            <Text className="text-gray-400 text-sm">
              Description
            </Text>

            <View className="flex-row items-center mt-1">

              <Ionicons
                name="pencil-outline"
                size={25}
                color="white"
              />

              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="What did you spend on?"
                placeholderTextColor="#6b7280"
                className="flex-1 text-white text-base ml-5"
              />

            </View>

          </View>

          {/* Category */}
          <Text className="text-white text-lg font-bold mx-5 mt-5">
            Select Category
          </Text>

          <View className="flex-row flex-wrap px-5 mt-4">

            {categories.map((item) => {

              const selected = selectedCategory === item.title

              return (
                <Pressable
                  key={item.title}
                  onPress={() => setSelectedCategory(item.title)}
                  className={`w-[31%] h-24 rounded-2xl border items-center justify-center mr-[2.3%] mb-3 ${
                    selected
                      ? 'border-red-500 bg-red-500/15'
                      : 'border-gray-800 bg-gray-900/30'
                  }`}
                >

                  <Ionicons
                    name={item.icon}
                    size={30}
                    color={selected ? '#ffffff' : '#d1d5db'}
                  />

                  <Text className="text-white text-sm mt-2">
                    {item.title}
                  </Text>

                </Pressable>
              )
            })}

          </View>

          {/* Date */}
          <Pressable className="mx-5 h-20 rounded-2xl border border-gray-800 bg-gray-900/30 px-5 flex-row items-center">

            <View className="flex-1">

              <Text className="text-gray-400 text-sm">
                Date
              </Text>

              <View className="flex-row items-center mt-2">

                <Ionicons
                  name="calendar-outline"
                  size={25}
                  color="white"
                />

                <Text className="text-white text-base ml-5">
                  13 September 2025
                </Text>

              </View>

            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#6b7280"
            />

          </Pressable>

          {/* Add Expense Button */}
          <Pressable
            onPress={() => console.log({
              amount,
              description,
              category: selectedCategory,
            })}
            className="mx-5 h-16 rounded-2xl bg-green-400 items-center justify-center mt-7"
          >

            <Text className="text-black text-xl font-bold">
              Add Expense
            </Text>

          </Pressable>

        </ScrollView>

      </SafeAreaView>
    </View>
  )
}